from flask import Flask, session, redirect, url_for, escape, request, render_template
import json
import os
import codebuilder
app = Flask(__name__)

@app.route('/')
def index():
    return '<h1>welcome</h1>'

#simple post request to get json data from frontent h
@app.route('/post', methods = ['POST'])
def get_post_javascript_data():
    
    #get data from the request

    jsdata = request.form['javascript_data']

    #load the json
    jsonData = json.loads(jsdata)

    #generate code
    with open(codebuilder.generate_code(jsonData), 'r') as myfile:
        code = myfile.read()
    
        #add code to new json file
        jsonData['code'] = str(code)

    newJsonData = json.dumps(jsonData)
    print( newJsonData)
    return  newJsonData

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
