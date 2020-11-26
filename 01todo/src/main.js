// import { isStringEmpty, isMarkup } from "./inputValidation.js";

const formSubmission = (event) => {
  event.preventDefault();
  console.log("Task Name=", document.forms.taskList.task.value);
  var item = document.getElementById("task").value;
  var text = document.createTextNode(item);
  var li = document.createElement("li");
  li.appendChild(text);
  document.getElementById("todoList").appendChild(li);

  // if(isStringEmpty && isMarkup){
  //   DocumentFragment.getElementById("todoList").appendChild(())
  //   event.target..value=""
};
