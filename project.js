// Variables

const addTodo = document.getElementById("add-todo-btn");
const inputTodo = document.getElementById("add-todo");
const todos = document.getElementById("todos");

// 2ND AREA- Function for remaining todos

function updateLeftItems() {
  const todoLeft = document.getElementById("count-todos");
  const count = document.querySelectorAll(".todo").length;
  todoLeft.innerText = `${count} items left`;
}

// Event Listener for Add Button

addTodo.addEventListener("click", function () {
  // 1ST AREA Input and TodoList
  // todo div design includes {checkButton} and {li}
  let todo = document.createElement("div");
  todo.classList.add("todo", "activeTodo");

  // checkButton design
  let checkButton = document.createElement("button");
  checkButton.innerHTML =
    '<i class="fa fa-circle-thin" aria-hidden="true"></i>';
  checkButton.classList.add("checkTodo");
  todo.appendChild(checkButton);

  // text design
  let li = document.createElement("li");
  li.innerText = `${inputTodo.value}`;
  todo.appendChild(li);

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
  }

  inputTodo.value = "";
  updateLeftItems();

  // Complete & Uncomplete a todo
  li.addEventListener("click", function () {
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
  // Filtering All Todos
  const allTodosBtn = document.getElementById("all-btn");
  allTodosBtn.addEventListener("click", function () {
    var todoArray = document.querySelectorAll(".todo");
    todoArray.forEach(function (todo) {
      todo.classList.remove("hideTodo");
    });
  });

  // Filtering Active Todos
  const activeTodosBtn = document.getElementById("active-btn");
  activeTodosBtn.addEventListener("click", function () {
    var todoArray = document.querySelectorAll(".todo");
    todoArray.forEach(function (todo) {
      todo.classList.remove("hideTodo");
      if (todo.classList.contains("completedTodo")) {
        todo.classList.add("hideTodo");
      }
    });
  });

  // Filtering Completed Todos
  const completedTodosBtn = document.getElementById("completed-btn");
  completedTodosBtn.addEventListener("click", function () {
    var todoArray = document.querySelectorAll(".todo");
    todoArray.forEach(function (todo) {
      todo.classList.remove("hideTodo");
      if (todo.classList.contains("activeTodo")) {
        todo.classList.add("hideTodo");
      }
    });
  });

  var completedTodosArray = document.querySelectorAll(".completedTodo");

  console.log(completedTodosArray);
});
