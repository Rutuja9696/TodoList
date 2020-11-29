// import { isStringEmpty, isMarkup } from "./inputValidation.js";

const formSubmission = (event) => {
  event.preventDefault();
  console.log("Task Name=", document.forms.taskList.task.value);
  var item = document.getElementById("task").value;

  // var text = document.createTextNode(item);
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  //task added will be displayed as list
  var li = document.createElement("li");
  li.innerHTML = item;

  li.appendChild(deleteButton);
  document.getElementById("todoList").appendChild(li);

  deleteButton.addEventListener("click", () => {
    li.classList.add("delete");
  });
  //

  // if(isStringEmpty && isMarkup){
  //   DocumentFragment.getElementById("todoList").appendChild(())
  //   event.target..value=""
};
