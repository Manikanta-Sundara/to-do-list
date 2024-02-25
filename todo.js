function addTask() {
  // getting the input value
  var taskInput = document.getElementById("task")
  var taskValue = taskInput.value.trim()

  //check if the value is not empty
  if (taskValue !== "") {
    var newTask = document.createElement("li")
    newTask.textContent = taskValue

    //create a delete button
    var deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.onclick = function () {
      newTask.remove()
    }

    //append the delete button to the task
    newTask.appendChild(deleteButton)

    // append the task to the task list
    var taskslist = document.getElementById("tasks-list")
    taskslist.appendChild(newTask)

    // clear the input field

    taskInput.value = ""
  }
}
