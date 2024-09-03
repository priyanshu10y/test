const studentData = {
    firstName: "vinod",
    lastName: "thapa",
    age: 20,
    gender: "male",
    grade: "A",
    courses: ["math", "science", "english"],
    address: {
        street: "123 main st",
        city: "cityville",
        state: "U P",
        zipCode: "12345",
    },
};

const addTodoList = () => {
  localStorage.setItem("ojectData",JSON.stringify(studentData))
}

const getTodoList = () => {
  const retrieveData = JSON.stringify(localStorage.getItem("objectData"));
  console.log("retrieved data:", retrieveData);
}

document.querySelector("#addBtn").addEventListener("click", () => {
  addTodoList();
});
document.querySelector("#getBtn").addEventListener("click", () => {
  getTodoList();
});
document.querySelector("#removeBtn").addEventListener("click", () => {
  removeTodoList();
});