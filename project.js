// Variables

const addTodo = document.getElementById("add-todo-btn");
const inputTodo = document.getElementById("add-todo");
const todos = document.getElementById("todos");

// 2ND AREA- Function for remaining todos

function updateLeftItems() {
  const todoLeft = document.getElementById("count-todos");
  let count = document.querySelectorAll(".todo:not(.hideElement)").length;
  todoLeft.innerText = `${count} items left`;
}

// Event Listener for Add Button

addTodo.addEventListener("click", function () {
  // 1ST AREA Input and TodoList

  // todo div design includes {checkButton} and {li}
  let todo = document.createElement("div");
  todo.classList.add("todo", "activeTodo");

  let checkBtnAndLi = document.createElement("div");
  checkBtnAndLi.classList.add("checkBtnAndLi");
  todo.appendChild(checkBtnAndLi);

  // checkButton design
  let checkButton = document.createElement("button");
  checkButton.innerHTML =
    '<i class="fa fa-circle-thin" aria-hidden="true"></i>';
  checkButton.classList.add("checkTodo");
  checkBtnAndLi.appendChild(checkButton);

  // text design
  let li = document.createElement("li");
  li.innerText = `${inputTodo.value}`;
  checkBtnAndLi.appendChild(li);

  // deleteButton design
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
  deleteButton.classList.add("deleteTodo");
  todo.appendChild(deleteButton);

  // Input to todo list
  if (inputTodo.value === "") {
    alert("Please enter a todo");
  } else {
    todos.appendChild(todo);
    let noTodoPlaceholder = document.querySelector(".no-item-placeholder");
    noTodoPlaceholder.classList.add("hideElement");
  }

  inputTodo.value = "";

  updateLeftItems();

  // Complete & Uncomplete a todo
  checkBtnAndLi.addEventListener("click", function () {
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "none";
      li.style.color = "white";
      checkButton.innerHTML =
        '<i class="fa fa-circle-thin" aria-hidden="true"></i>';
      todo.classList.remove("completedTodo");
      todo.classList.add("activeTodo");
    } else {
      li.style.textDecoration = "line-through";
      li.style.color = "grey";
      checkButton.innerHTML =
        '<i class="fa fa-check-circle" aria-hidden="true"></i>';
      todo.classList.add("completedTodo");
      todo.classList.remove("activeTodo");
    }
  });

  // Delete a todo
  deleteButton.addEventListener("click", function () {
    deleteButton.parentElement.remove();
    updateLeftItems();
  });

  // 2ND AREA-Left Items, Clear and Completed Buttons
  // Clear all todos
  const clearTodos = document.getElementById("clear-btn");
  clearTodos.addEventListener("click", function () {
    todo.remove();
    updateLeftItems();
  });

  // Complete or uncomplete all todos
  const completeTodos = document.getElementById("complete-btn");
  let x = "off";
  completeTodos.addEventListener("click", function () {
    if (x === "off") {
      li.style.textDecoration = "line-through";
      li.style.color = "grey";
      checkButton.innerHTML =
        '<i class="fa fa-check-circle" aria-hidden="true"></i>';
      todo.classList.add("completedTodo");
      todo.classList.remove("activeTodo");
      x = "on";
    } else {
      li.style.textDecoration = "none";
      li.style.color = "white";

      checkButton.innerHTML =
        '<i class="fa fa-circle-thin" aria-hidden="true"></i>';
      todo.classList.add("activeTodo");
      todo.classList.remove("completedTodo");
      x = "off";
    }
  });

  // 3RD AREA- Filtering Todos
  // constants for area3
  let allTodosBtn = document.getElementById("all-btn");
  let activeTodosBtn = document.getElementById("active-btn");
  let completedTodosBtn = document.getElementById("completed-btn");

  function focus(focusThis, unfocusThis1, unfocusThis2) {
    focusThis.classList.remove("unfocused");
    unfocusThis1.classList.remove("focused");
    unfocusThis2.classList.remove("focused");

    focusThis.classList.add("focused");
    unfocusThis1.classList.add("unfocused");
    unfocusThis2.classList.add("unfocused");
  }

  // Filtering All Todos

  allTodosBtn.addEventListener("click", function () {
    focus(allTodosBtn, activeTodosBtn, completedTodosBtn);
    updateLeftItems();
    var todoArray = document.querySelectorAll(".todo");
    todoArray.forEach(function (todo) {
      todo.classList.remove("hideElement");
    });
  });

  // Filtering Active Todos

  activeTodosBtn.addEventListener("click", function () {
    focus(activeTodosBtn, allTodosBtn, completedTodosBtn);
    updateLeftItems();
    var todoArray = document.querySelectorAll(".todo");
    todoArray.forEach(function (todo) {
      todo.classList.remove("hideElement");
      if (todo.classList.contains("completedTodo")) {
        todo.classList.add("hideElement");
      }
    });
  });

  // Filtering Completed Todos

  completedTodosBtn.addEventListener("click", function () {
    focus(completedTodosBtn, allTodosBtn, activeTodosBtn);
    updateLeftItems();
    var todoArray = document.querySelectorAll(".todo");
    todoArray.forEach(function (todo) {
      todo.classList.remove("hideElement");
      if (todo.classList.contains("activeTodo")) {
        todo.classList.add("hideElement");
      }
    });
  });

  var completedTodosArray = document.querySelectorAll(".completedTodo");

  console.log(completedTodosArray);
});
