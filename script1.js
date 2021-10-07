let newTask = document.querySelector(".add-task")
let button = document.querySelector(".add-button")
let taskContainer = document.querySelector(".ul-container")
let pendingTasks = document.querySelector(".pending")
let deleteTask = document.querySelector(".fa fa-trash")
let deleteTasks = document.querySelector(".clear-all")
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
console.log(deleteTask)
if (localStorage.getItem("tasks")) {
    tasks.map((task) => {
      createTask(task);
    });
  }
// button listen
button.addEventListener("click", function (e) {
    const inputValue = newTask.value;

    if (inputValue != "") {
      const task= [inputValue]
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      createTask(task);
    }
  });

// create task
function createTask(task) {
    let taskElMarkup = ""
    tasks.forEach((task,index) =>{
      taskElMarkup += `
        <ul class="row mt-4">
        <li class="task d-flex justify-content-between">
            <input type="checkbox">
            <p class="text-white py-3 shadow-lg">${task}</p>
            <button class="remove-task" onclick="deleteTask(${index})"><i class="fa fa-trash ms-auto p-2 bd-highlight" aria-hidden="true"></i></button>
        </li>
    </ul>`;

    })
    // for(let newTodo = 0;newTodo < tasks.length; newTodo++){
    //     taskElMarkup += `
    //     <ol class="row mt-4">
    //     <li class="task d-flex justify-content-between">
    //         <input type="checkbox">
    //         <p class="text-white py-3 shadow-lg">${tasks[newTodo]}</p>
    //         <button class="remove-task" onclick="deleteTask(${index})"><i class="fa fa-trash ms-auto p-2 bd-highlight" aria-hidden="true"></i></button>
    //     </li>
    // </ol>`;
    // }
    taskContainer.innerHTML = taskElMarkup;
    newTask.value = ""

    pendingTasks.textContent = tasks.length
  }

  deleteTasks.onclick = () =>{
    tasks = [];
    localStorage.setItem("tasks", JSON.stringify(tasks));
    createTask()
  }
//  function deleteTask(index){
//     //console.log("delete")
//     let getTodo = localStorage.getItem("tasks");
//     tasks = JSON.parse(getTodo);
//     tasks.splice(index, 1)
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//     createTask(task)
//   }
// let checkedTodo = document.querySelector("ul");
// checkedTodo.addEventListener("click",(e) =>{
//   console.log("clicked")
// console.log(e.target.tagName)
//   if (e.target.tagName === "p" || e.target.tagName === "LI" || e.target.tagName === "INPUT" ){
//     console.log(e.target.tagName)
//     e.target.classList.toggle ("checked")
//   }
// }, false)
// console.log("clicked")
// console.log(e.target.tagName)
// })
