from flask import Flask, jsonify, render_template, request, url_for
import random
import os

app = Flask(__name__)
 
@app.route("/")
def index():
    return render_template('index.html')

@app.route("/ajax", methods = ['POST'])
def ajax():
    num         = int(request.data)
    returnValue = []
    for i in range(num):
        filename        = random.choice(os.listdir("static\\images\\"))
        returnValue.append(url_for('static', filename='images/' + filename))
    return jsonify(returnValue)
 
if __name__ == "__main__":
    app.run(debug=True, port=80, host='0.0.0.0')

