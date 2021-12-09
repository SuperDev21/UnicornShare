import os

# To generate a new secret key:
# >>> import random, string
# >>> "".join([random.choice(string.printable) for _ in range(24)])
SECRET_KEY = "ZJ58ZxK%7C]\th-{%=iOzAEv-"


basedir = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.path.join(basedir, 'db', 'app.db')


UPLOAD_FOLDER = 'public/uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

RESIZE_ROOT = os.path.join(basedir, UPLOAD_FOLDER)
RESIZE_URL  = os.path.join(basedir, UPLOAD_FOLDER) # URL parce que ça gere aussi S3 mais la c'est le nom du nouveau fichier
RESIZE_CACHE_STORE = "noop"
