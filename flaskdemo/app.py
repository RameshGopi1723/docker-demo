from flask import Flask

app = Flask(__name__)

@app.route("/api")
def hello():
    return { 
                "message":"vanakkam da mapla..!!" , 
                "greeting":"eppudi iruka nanba..!!"
            }

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int("5000"), debug=True)
    