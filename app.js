const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const errorModal = document.getElementById("error-modal");
const closeModalBtn = document.getElementById("close-modal-btn");

let day = new Date();
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let formattedDate = day.toLocaleDateString('en-US', options);
document.getElementById("day").innerHTML = formattedDate;

// Load todo items from local storage
let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
  todoList.innerHTML = '';
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    span.textContent = todo.text;
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      todos.splice(i, 1);
      saveTodos();
      renderTodos();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  }
}

renderTodos();

addBtn.addEventListener("click", () => {
  const todoText = todoInput.value.trim();
  if (!todoText) {
    // display error modal
    errorModal.style.display = "flex";
    return;
  }

  // Add new todo to the list and save to local storage
  todos.push({ text: todoText });
  saveTodos();

  renderTodos();

  todoInput.value = "";
});

closeModalBtn.addEventListener("click", () => {
  // hide error modal
  errorModal.style.display = "none";
});
