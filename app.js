const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const errorModal = document.getElementById("error-modal");
const closeModalBtn = document.getElementById("close-modal-btn");

let day = new Date();
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let formattedDate = day.toLocaleDateString('en-US', options);
document.getElementById("day").innerHTML = formattedDate;

addBtn.addEventListener("click", () => {
  const todoText = todoInput.value.trim();
  if (!todoText) {
    // display error modal
    errorModal.style.display = "flex";
    return;
  }

  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  span.textContent = todoText;
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
  todoInput.value = "";
});

closeModalBtn.addEventListener("click", () => {
  // hide error modal
  errorModal.style.display = "none";
});
