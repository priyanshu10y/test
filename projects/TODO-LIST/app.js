const mainTodoElem = document.querySelector(".todo-list-elem");
const inputValue = document.querySelector(".task");

const addTodoList = (e) => {
  e.preventDefault();
  const div = document.createElement("div"); 
  div.classList.add("main_todo_div");
};

document.querySelector(".btn").addEventListener("click", (e) => {
  addTodoList(e);
});
1.49.38