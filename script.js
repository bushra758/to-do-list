function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var ul = document.getElementById("tasks");
        var li = document.createElement("li");
        li.innerHTML = '<span>' + taskText + '</span><button onclick="removeTask(this)">Delete</button>';
        ul.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}

function removeTask(element) {
    element.parentElement.remove();
}
