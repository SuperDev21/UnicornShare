import os
import datetime

from flask import Flask, render_template, request, redirect, url_for, send_from_directory, session, abort, Markup, make_response, jsonify
from werkzeug.utils import secure_filename
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object('config')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'application/json'

from .models import query_db, execute_db

from io import BytesIO

def allowed_file(filename):
        return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']


@app.route('/public/uploads/<filename>')
def send_file(filename):
    return send_from_directory('../' + app.config['UPLOAD_FOLDER'], filename)

@app.context_processor
def inject_categories_for_all_templates():
    return {
        'categories': query_db("select * from categories"),
        'post_form': session.pop('add-post-errors', None),
        'current_category': request.args.get('category', None),
    }

@app.template_filter('strftime')
def _jinja2_filter_datetime(date, fmt='%d/%m/%Y at %H:%M:%S'):
    date = datetime.datetime.strptime(date, '%Y-%m-%d %H:%M:%S')
    date += datetime.timedelta(hours=1) # Gestion du timezone
    return datetime.datetime.strftime(date, fmt)


@app.route('/', methods=['Get','POST'])
def index():    
    
    where = None
    if 'category' in request.args:
        pictures = query_db(f"""select *, avg(votes.value) as vote, count(votes.value) as total_vote, categories.name as cat_name
        from pictures
        inner join categories on category_id = categories.id
        left join votes on votes.picture_id = pictures.id
        where categories.name = ?
        group by pictures.id
        order by id desc;""", (request.args['category'],))
    else:
        pictures = query_db(f"""select *, avg(votes.value) as vote, count(votes.value) as total_vote, categories.name as cat_name
        from pictures
        inner join categories on category_id = categories.id
        left join votes on votes.picture_id = pictures.id
        group by pictures.id
        order by id desc;""")
    # return render_template('index.html', pictures=pictures)
    return jsonify([dict(picture) for picture in pictures])

@app.route('/pictures/<id>')
def show(id):
    picture = query_db("""select *, avg(votes.value) as vote, count(votes.value) as total_vote, categories.name as cat_name
        from pictures
        inner join categories on category_id = categories.id
        left join votes on votes.picture_id = pictures.id
        where pictures.id = ?
        group by pictures.id;""", (id,), one=True)
    if picture is None:
        abort(404)
    comments = query_db("select * from comments where picture_id = ?;", (id,))
    # return render_template('show.html', picture=picture, comments=comments and jsonify(dict(picture)))
    return jsonify({'comments':[dict(comments) for comments in comments], 'pictures':[dict(picture)]})


@app.route('/pictures', methods=['POST'])
def post_pictures():

    # file = request.files['file']
    # title = request.form['title']
    # comment = request.form['comment']
    # category_name = request.form['category']
    # print('dans picture_post file : ', file)
    # print('dans picture_post title: ',title)
    # print('dans picture_post comment : ', comment)
    # print('dans picture_post category_name : ', category_name)
    # category_id = request.form['category_id']
    postdata = request.get_json()
    # print('dans picture_post file : ', postdata.get('file'))
    print('dans picture_post title: ', postdata.get('title'))
    print('dans picture_post comment : ', postdata.get('comment'))
    print('dans picture_post category_name : ', postdata.get('category_name'))
    # category_id = execute_db("select categories.id from categories where categories.name = ?;", (postdata.get('category_name')))
    # print('dans picture_post category_id : ', category_id)
    # if category_id and comment and title and file and allowed_file(file.filename):
    # # if category_name and comment and title and file and allowed_file(file.filename):
    #     filename = secure_filename(file.filename)

    #     picture_id = execute_db("insert into pictures (title, path, comment, category_id) values (?, ?, ?, ?);", (title, filename, comment, category_id))
    #     file.save(os.path.join(app.config['UPLOAD_FOLDER'], f"{picture_id}-{filename}"))

    #     return redirect(url_for('index'))
    # else:
    #     session['add-post-errors'] = request.form
    #     return redirect(request.referrer)
    return 'toto'

@app.route('/pictures/<picture_id>/comments', methods=['POST'])
def post_comment(picture_id):
    picture = query_db("select *, categories.name as cat_name from pictures inner join categories on category_id = categories.id where pictures.id = ?;", (picture_id,), one=True)
    if picture is None:
        abort(404)

    author = request.form['author']
    content = request.form['content']
    if author and content:
        execute_db("insert into comments (author, content, picture_id) values (?, ?, ?);", (author, content, picture_id))

        return redirect(f"/pictures/{picture_id}")
    else:
        comments = query_db("select * from comments where picture_id = ?;", (picture_id,))
        return render_template('show.html', picture=picture, comments=comments, comment_form=request.form)



@app.route('/pictures/<picture_id>/votes', methods=['POST'])
def post_votes(picture_id):
    picture = query_db("select *, categories.name as cat_name from pictures inner join categories on category_id = categories.id where pictures.id = ?;", (picture_id,), one=True)
    if picture is None:
        abort(404)

    value = int(request.form['value'])
    if value and 0 <= value <= 5:
        execute_db("insert into votes (value, picture_id) values (?, ?);", (value, picture_id))

    return redirect(f"/pictures/{picture_id}")



if __name__ == "__main__":
    app.run()
