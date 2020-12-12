const LOCAL_STORAGE_LIST_KEY = `todoList`;
let storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
// localStorage.setItem["storage".JASON.stringify(storage)];
// localStorage.getItem["storage"];
// JASON.parse[localStorage.getItem("storage")];
function saveAndRender() {
  save();
  render();
}
function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(storage));
}
