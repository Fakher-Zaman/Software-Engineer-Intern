const userTodoItems = document.querySelector('.todo-list');

const getData = async () => {
    const res = await fetch(`https://dummyjson.com/users/${localStorage.userId}/todos`);
    // console.log(res);
    const data = await res.json();
    // console.log(data);
    return data;
};

const displayTasks = async () => {
    const payload = await getData();
    let dataDisplay = payload.todos.map((task) => {
        console.log(task);
        const { id, todo, completed, userId } = task;

        return `
            <div class="todo">
                <li class="todo-item">${todo}</li>
                <span class="complete-btn">
                    <i class="fa-solid fa-check" style="font-size: 1.8rem;"></i>
                </span>
                <span class="trash-btn">
                    <i class="fa-regular fa-trash-can" style="font-size: 1.5rem;"></i>
                </span>
            </div>
        `;
    }).join("");

    userTodoItems.innerHTML = dataDisplay;
}

displayTasks();

// selectors

const todoInputs = document.querySelector(".todo-inputs");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todos");

//event listners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodos);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

function addTodos(e) {
    e.preventDefault();

    //tododiv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //new todo
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInputs.value;
    todoDiv.appendChild(newTodo);

    //checked button
    const compleatedButton = document.createElement("span");
    compleatedButton.innerHTML = '<i class="fa-solid fa-check" style="font-size: 1.8rem;"><i>';
    compleatedButton.classList.add("complete-btn");
    todoDiv.appendChild(compleatedButton);
    //trash button
    const trashButton = document.createElement("span");
    trashButton.innerHTML = '<i class="fa-regular fa-trash-can" style="font-size: 1.5rem;"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // appened list
    todoList.appendChild(todoDiv);
    todoInputs.value = "";
}

function deleteCheck(e) {
    const items = e.target;

    //delete todo
    if (items.classList[0] === "trash-btn") {
        const todo = items.parentElement;

        //todo animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }

    //completed btn
    if (items.classList[0] === "complete-btn") {
        const todo = items.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
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
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}
function getTodos() {
    //check
    let todos = [];

    todos.forEach(function (todo) {
        //todoDiv
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        //create li
        const newTodo = document.createElement("li");
        newTodo.classList.add("todo-item");
        newTodo.innerText = todo;
        todoDiv.appendChild(newTodo);

        //checked button
        const compleatedButton = document.createElement("button");
        compleatedButton.innerHTML = '<i class="fas fa-check"><i>';
        compleatedButton.classList.add("complete-btn");
        todoDiv.appendChild(compleatedButton);
        //trash button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"><i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
        //append list
        todoList.appendChild(todoDiv);
    });
}