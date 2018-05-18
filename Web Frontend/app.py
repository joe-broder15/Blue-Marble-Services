from flask import Flask, session, redirect, url_for, escape, request, render_template
import json
import os
app = Flask(__name__)

#when the site is visited at the root url, render index.html
@app.route('/')
def index():
    return render_template('index.html')


#get JSON data from post request made to URL/post
@app.route('/post', methods = ['POST'])
def get_post_javascript_data():
    jsdata = request.form['javascript_data']

    jsonData = json.loads(jsdata)
    print(jsonData)
    return jsdata

#run app on 0.0.0.0:5000
if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
