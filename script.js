//target all neccessary elements
//listen on the input element --> onkeyup
//listen on the button element -->onclick
//show the new tasks added
//show the number of pending tasks
let newTask = document.querySelector(".add-task")
let button = document.querySelector(".add-button")
let taskContainer = document.querySelector(".ul-container")
let pendingTasks = document.querySelector(".pending")

newTask.onkeyup = () => {
    let todoValue = newTask.value;
    
    console.log(todoValue)
    // if(todoValue.trim() != 0){
    //     button.classList.add(".active")
    // }
    // else{
    //     button.classList.remove(".active")
    // }
}
displayTasks()

button.onclick = () =>{
    let todoArray;
    let todoValue = newTask.value;
    let getlocalStorageTodoData = localStorage.getItem("Task list");
    //console.log("local storage", getlocalStorageTodoData)

    if(getlocalStorageTodoData == null){
        todoArray =[]
    }else{
        todoArray = JSON.parse(getlocalStorageTodoData)
    };
    todoArray.push(todoValue)
    //console.log(todoArray)
    localStorage.setItem("Task list", JSON.stringify(todoArray))
    displayTasks()
   
}


function displayTasks(){
    let getlocalStorageTodoData = localStorage.getItem("Task list")
    let todoArray;
    if(getlocalStorageTodoData == null){
        todoArray =[]
    }else{
        todoArray = JSON.parse(getlocalStorageTodoData)
    };
    pendingTasks.textContent = todoArray.length

    let taskList=""
    //data = JSON.parse(getlocalStorageTodoData)
    //console.log(data)
    for (let task of todoArray){
        taskList+=`
        <ul class="row mt-4">
            <li class="task d-flex justify-content-between">
                <input type="checkbox" id="checked">
                <label for="checked" class="text-white py-3 shadow-lg">${task}</label>
                <i class="fa fa-trash ms-auto p-2 bd-highlight" aria-hidden="true"></i>
            </li>
        </ul>`
    }
    taskContainer.innerHTML = taskList;
    newTask.value = ""
}
