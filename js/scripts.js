// Business Logic for AddressBook ---------
function Task(taskName, dueDate, priority) {
  this.taskName = taskName,
  this.dueDate = dueDate,
  this.priority = priority
}
function ToDoList(tasks) {
  this.tasks = []
  this.currentId = 0
}

ToDoList.prototype.addTask = function(task) {
  this.tasks.push(task);
}
ToDoList.prototype.completeTask = function(id) {
  for (var i=0 ; i < this.tasks.length; i++) {
    if (this.tasks[i]) {
      if(this.tasks[i].id == id) {
        delete this.tasks[i];
        return true;
      }
    }
  } return false;
}

// Front End for Address Book
var toDoList = new ToDoList();

function addNewTask() {
  task.id = this.assignId();
  new Task(taskName, dueDate, priority)
};

ToDoList.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

function displayTaskDetails(taskToDisplay) {
  var taskList = $("ul#tasks");
  var htmlForTaskInfo = "";
  taskToDisplay.tasks.forEach(function(task) {
    htmlForTaskInfo += "<li id= "+ task.id + ">" + task.taskName + " " + task.dueDate + "</li>";
  });
  taskList.html(htmlForTaskInfo);
};

function showTask(taskId) {
  $("#show-tasks").show();
  $(".task-name").html(task.taskName);
  $(".due-date").html(task.dueDate);
  $(".priority-level").html(task.priority);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='completeButton' id=" +  + task.id + ">Completed</button>");
}

function attachTaskListener() {
  $("ul#tasks").on("click", "li", function() {
    showTask(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    toDoList.completeTask(this.id);
  displayTaskDetails(toDoList);
  })
};

$(document).ready(function() {
  attachTaskListener();

  $("form#formOne").submit(function(event) {
    event.preventDefault();
      var taskName = $("#taskName").val();
      var dueDate = $("#dueDate").val();
      var priority = $("#priority").val();
      var newTask = new Task(taskName, dueDate, priority);
      toDoList.addTask(newTask);
      console.log(newTask)
      console.log(toDoList)
      displayTaskDetails(toDoList);
  });

});
