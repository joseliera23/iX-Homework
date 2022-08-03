class Task {
  constructor(taskName) {
    this.taskName = taskName;
    this.completed = false;
  }
}

class UserInterface {
  constructor() {
    this.taskInput = document.getElementById("task-input");
    this.button = document.getElementById("button");
    this.tableBody = document.getElementById("table-body");

    this.tasks = [];
  }

  bindEventListener(button, func) {
    button.addEventListener("click", func);
  }

  handleButtonClick(event) {
    const task = new Task(this.taskInput.value);
    this.tasks.push(task);
    this.taskInput.value = "";
    this.populateTaskTable();
  }

  populateTaskTable() {
    this.tableBody.innerHTML = "";

    this.tasks.forEach((task, i) => {
      const row = document.createElement("tr");
      const taskCell = document.createElement("td");
      const completedCell = document.createElement("td");
      const actionCell = document.createElement("td");

      const completeButton = document.createElement("button");
      completeButton.className = "btn btn-success";
      completeButton.innerHTML = "Mark Completed";

      row.append(taskCell);
      row.append(completedCell);
      row.append(actionCell);

      this.tableBody.append(row);

      taskCell.innerHTML = task.taskName;
      completedCell.innerHTML = task.completed;

      this.bindEventListener(completeButton, (e) => {
        completedCell.innerHTML = true;
      });

      actionCell.append(completeButton);
    });
  }
}

const ui = new UserInterface();

console.log(ui);
ui.bindEventListener(ui.button, (e) => {
    ui.handleButtonClick(e);
});
