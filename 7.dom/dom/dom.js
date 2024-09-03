// let element = document.querySelector("#h1b");
// console.log(element.innerHTML)

// let inputElem = document.querySelector(".inp")
// let btn = document.querySelector(".btn")
// // let add = document.querySelector(".todoadd")
// let todo = document.querySelector(".todoElements")
// const addTodo = () => {
// //   console.log(inputElem.value)
  
//     let pe = document.createElement("p")
//     pe.textContent = inputElem.value
//     // console.log(pe)
//     todo.append(pe)
// }
// btn.addEventListener("click", () => {
//   addTodo()
// })


let input = document.querySelector(".inp");
let button = document.querySelector(".btn")
let todo = document.querySelector(".todoElements")

let todolist = () => {
  let pe = document.createElement("p");
  pe.textContent = input.value;
  todo.append(pe);

  input.value = "";

}

button.addEventListener("click", () => {
  todolist()

  
})

todo.addEventListener("click", (event) => {
  
  let current = event.target;
  current.remove();
})