from flask import Flask, render_template, url_for
from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent

TEMPLATE_DIR = os.path.join(BASE_DIR, 'web_client', 'build', 'templates')
STATIC_DIR = os.path.join(BASE_DIR, 'web_client', 'build', 'static')

HOST = 'localhost'
PORT = 3000

from main.main import main
from api.api import api

app = Flask(__name__, template_folder = TEMPLATE_DIR, static_folder = STATIC_DIR)
app.register_blueprint(main);
app.register_blueprint(api);




if __name__ == '__main__':
	app.run(host=HOST, port=PORT, debug=True)