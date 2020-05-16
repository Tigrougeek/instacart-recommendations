#!/usr/bin/env python

import os
from flask import Flask, render_template
app = Flask(__name__, template_folder='../static', static_folder='../static', static_url_path='')
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = False


@app.route("/")
def index():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=os.environ.get('PORT', 5001), debug=True)
