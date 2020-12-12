// import { isStringEmpty, isMarkup } from "./inputValidation.js";

const formSubmission = (event) => {
  event.preventDefault();
  console.log("Task Name=", document.forms.taskList.task.value);
  var item = document.getElementById("task").value;
  //creating buttons
  var doneButton = document.createElement("button");
  doneButton.innerHTML = "Done";
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";

  //task added will be displayed as list
  var li = document.createElement("li");
  li.innerHTML = item;

  //list will be displayed along with done and delete button
  li.appendChild(doneButton);
  document.getElementById("todoList").appendChild(li);
  li.appendChild(deleteButton);
  document.getElementById("todoList").appendChild(li);

  //on click function for done and delete buttons
  doneButton.addEventListener("click", () => {
    li.classList.add("done");
  });
  deleteButton.addEventListener("click", () => {
    li.classList.add("delete");
  });
  //validation for empty string & markup tag
  // if(isStringEmpty && isMarkup){
  //   Document.getElementById("todoList").appendChild(())
  //   event.target..value=""
};
