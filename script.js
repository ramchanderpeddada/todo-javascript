//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoFilter = document.querySelector(".filter-todo");
//event listeners to the selectors
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
todoFilter.addEventListener("click", filterTodo);

//function to add the todo list
function addTodo(event) {
  //preventing the refresh when the button is clicked
  event.preventDefault();
  //crate a TODO div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo"); //adding a class
  //create newtodo li
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  //value entered by the user
  newTodo.innerText = todoInput.value;

  todoDiv.appendChild(newTodo);

  //edit button when we edit the tasks
  const editButton = document.createElement("button");
  editButton.innerHTML = '<i class ="fas fa-edit"></i>';
  editButton.classList.add("edit-btn");
  todoDiv.appendChild(editButton);
  //function to edit the user todo list
  editButton.onclick = function () {
    editWorking(newTodo);
  };
  //check completed tick button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //check trash button(when we click trash it will remove)
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //append elements
  todoList.appendChild(todoDiv);
  console.log(todoDiv);
  //clear to input value
  todoInput.value = "";
}
//

//function to remove the todo list
function deleteCheck(e) {
  const item = e.target;
  //delete todo when click on trash symbol
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //animations
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //check mark completed stike out
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
//for filtering the completed and incompleteed todos
function filterTodo(e) {
  const todos = todoList.childNodes;
  console.log(todos);
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "pending":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
// callin the fucntion for edit
function editWorking(e) {
  let editValue = prompt("edit the items", e.firstChild.nodeValue);
  //firstchild in this
  e.firstChild.nodeValue = editValue;
}