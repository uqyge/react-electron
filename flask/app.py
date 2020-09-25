import subprocess

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def run_app():
    target = "C:\Program Files\Elgato\StreamDeck\StreamDeck.exe"
    neteaseMusic = r"C:\Program Files (x86)\Netease\CloudMusic\cloudmusic.exe"
    print("run app")
    targetLinux = "code-insiders"
    subprocess.call([neteaseMusic])
    return


@app.route("/", methods=["GET", "POST"])
def hello_world():
    ico = r"data:image/jpeg;base64,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"
    if request.method == "POST":
        some_json = request.get_json(force=True)
        # some_json = request.get_json()
        print("backend:", some_json["id"])
        if some_json["id"] == "1":
            run_app()
        return jsonify({"your sent": some_json}), 201
    return jsonify(
        [
            {"id": "1", "icon": "1", "content": "netease", "icon": ico},
            {"id": "2", "icon": "2", "content": "wudi-2", "icon": ""},
            {"id": "3", "icon": "3", "content": "wudi-3", "icon": ico},
            {"id": "4", "icon": "4", "content": "wudi-4", "icon": ico},
            {"id": "5", "icon": "5", "content": "wudi-5", "icon": ico},
        ]
    )


if __name__ == "__main__":
    # app.run(debug=True)
    app.run()
    # app.run(host="0.0.0.0", port=80)
print('hello world')