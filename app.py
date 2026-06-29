from flask import Flask, jsonify, request
import json
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# todos.json 파일에서 데이터 읽기
def load_todos():
    with open("todos.json", "r", encoding="utf-8") as f:
        return json.load(f)

# todos.json 파일에 데이터 저장하기
def save_todos(todos):
    with open("todos.json", "w", encoding="utf-8") as f:
        json.dump(todos, f, ensure_ascii=False, indent=2)

# 1. 모든 할 일 가져오기
@app.route("/todos", methods=["GET"])
def get_todos():
    todos = load_todos()
    return jsonify(todos)

# 2. 새 할 일 추가하기
@app.route("/todos", methods=["POST"])
def add_todo():
    todos = load_todos()
    new_todo = request.json  # JavaScript가 보낸 데이터
    todos.append(new_todo)
    save_todos(todos)
    return jsonify(new_todo)

# 3. 할 일 삭제하기 (id로 찾아서 삭제)
@app.route("/todos/<int:todo_id>", methods=["DELETE"])
def delete_todo(todo_id):
    todos = load_todos()
    todos = [t for t in todos if t["id"] != todo_id]
    save_todos(todos)
    return jsonify({"result": "deleted"})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", debug=True, port=port)
