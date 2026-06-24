// 1. HTML에 있는 요소들을 JavaScript에서 사용할 수 있게 가져오기
const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

// 2. 버튼을 클릭했을 때 실행할 함수 연결
addButton.addEventListener("click", addTodo);

function addTodo() {
  const todoText = todoInput.value;

  if (todoText.trim() === "") {
    alert("할 일을 입력해주세요!");
    return;
  }

  // 1. li 요소 만들기
  const li = document.createElement("li");

  // 2. 할 일 텍스트를 담을 span 만들기
  const span = document.createElement("span");
  span.textContent = todoText;

  // 3. 완료 체크박스 만들기
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // 체크박스를 클릭하면 글자에 줄 긋기/풀기
  checkbox.addEventListener("change", function () {
    span.classList.toggle("done");
  });

  // 4. 삭제 버튼 만들기
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";

  // 삭제 버튼 클릭하면 이 li를 목록에서 제거
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // 5. 만든 요소들을 li 안에 순서대로 넣기
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // 6. li를 목록에 추가
  todoList.appendChild(li);

  todoInput.value = "";
}