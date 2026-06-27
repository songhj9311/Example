from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "서버가 작동하고 있어요!"



if __name__ == "__main__":
    app.run(debug=True, port=5000)