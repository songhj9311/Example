const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

const SERVER_URL = "http://localhost:5000/todos";

// 페이지를 처음 열었을 때, 서버에서 저장된 할 일들을 가져와서 화면에 그리기
window.addEventListener("DOMContentLoaded", loadTodos);

addButton.addEventListener("click", addTodo);

// 1. 서버에서 할 일 목록 가져오기
function loadTodos() {
  fetch(SERVER_URL)
    .then((response) => response.json())
    .then((todos) => {
      todos.forEach((todo) => renderTodo(todo));
    });
}

// 2. 새 할 일 추가하기 (화면 + 서버 둘 다)
function addTodo() {
  const todoText = todoInput.value;

  if (todoText === "") {
    alert("할 일을 입력해주세요!");
    return;
  }

  const newTodo = {
    id: Date.now(),       // 현재 시각을 고유 번호로 사용 (중복 안 생김)
    text: todoText,
    done: false
  };

  // 서버에 "이거 추가해줘" 요청 보내기
  fetch(SERVER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTodo)
  })
    .then(() => {
      renderTodo(newTodo);   // 화면에도 그리기
      todoInput.value = "";
    });
}

// 3. 할 일 하나를 화면에 그리는 함수 (li 만들기)
function renderTodo(todo) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = todo.text;
  if (todo.done) {
    span.classList.add("done");
  }

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.done;

  checkbox.addEventListener("change", function () {
    span.classList.toggle("done");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";

  // 삭제 버튼 누르면 서버에도 삭제 요청 + 화면에서도 제거
  deleteBtn.addEventListener("click", function () {
    fetch(SERVER_URL + "/" + todo.id, {
      method: "DELETE"
    })
      .then(() => {
        li.remove();
      });
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  todoList.appendChild(li);
}