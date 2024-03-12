let tasks = [
    {title: "Buy groceries", description: "go to the grocery store"},
    {title: "Get gas", description: "Fill the car up on gas while at the grocery store"}
];

let weather = {}

var taskTitle = document.getElementById("task-title");
var taskDescription = document.getElementById("task-description");

fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/san%20francisco?unitGroup=metric&key=BTYAN9B4HL48STCXCVSEYYZRB&contentType=json", {
  "method": "GET",
  "headers": {
  }
  })
.then(response => {
  weather = response.json()
})
.catch(err => {
  console.error(err);
});

function loadTasks() {
    var taskList = document.getElementById("task-list");

    taskList.innerHTML = '';

    tasks.forEach(function(task) {
        var taskItem = document.createElement("div");
        taskItem.className = "task-item";
        taskItem.innerHTML = `
            <div class="bubble-border">
            <h2>${task.title}</h2>
            <p>${task.description}</p>
            <input type="checkbox">
            <label>Task complete</label>
            </div>
        `;
        taskList.appendChild(taskItem)
    });
}

function addTask() {
    let newTask = {}
    newTask.title = taskTitle.value
    newTask.description = taskDescription.value
    taskTitle.value = ""
    taskDescription.value = ""
    tasks.push(newTask)
    loadTasks()
}

getWeather();
loadTasks();