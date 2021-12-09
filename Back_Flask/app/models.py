from .views import app
from flask import g


import sqlite3
import os

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(app.config['DATABASE'])
        db.row_factory = sqlite3.Row
    return db


def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()
    return (rv[0] if rv else None) if one else rv


def execute_db(query, args=()):
    cur = get_db().cursor()
    cur.execute(query, args)
    cur.close()
    return cur.lastrowid


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.commit()
        db.close()


def init_db():
    os.makedirs(os.path.dirname(app.config['DATABASE']), exist_ok=True)

    for table in ('pictures', 'categories', 'comments', 'votes'):
        query_db(f"drop table if exists {table};")

    query_db("""create table categories (id INTEGER PRIMARY KEY AUTOINCREMENT,
                                         name VARCHAR(200) NOT NULL);""")

    query_db("""create table pictures (id INTEGER PRIMARY KEY AUTOINCREMENT,
                                       title VARCHAR(200) NOT NULL,
                                       path VARCHAR(200) NOT NULL,
                                       category_id INTEGER NOT NULL,
                                       comment VARCHAR(20000) NOT NULL,
                                       CONSTRAINT fk_categories
                                         FOREIGN KEY (category_id)
                                         REFERENCES categories(category_id));""")

    query_db("""create table comments (id INTEGER PRIMARY KEY AUTOINCREMENT,
                                       content VARCHAR(20000) NOT NULL,
                                       author VARCHAR(200) NOT NULL,
                                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                       picture_id INTEGER NOT NULL,
                                       CONSTRAINT fk_pictures
                                         FOREIGN KEY (picture_id)
                                         REFERENCES pictures(picture_id));""")

    query_db("""create table votes (id INTEGER PRIMARY KEY AUTOINCREMENT,
                                    value INTEGER NOT NULL,
                                    picture_id INTEGER NOT NULL,
                                    CONSTRAINT fk_pictures
                                      FOREIGN KEY (picture_id)
                                      REFERENCES pictures(picture_id));""")


    query_db("""insert into categories (name) VALUES ('Paysages'), ('Animaux'), ('Nourriture'), ('Films')""")
