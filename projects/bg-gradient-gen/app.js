// let btn1 = document.querySelector(".mybtn1");
// let btn2 = document.querySelector(".mybtn2");
// let copy = document.querySelector(".copycode");
// let rgb1 = "#051937";
// let rgb2 = "#A8EB12";

// const hexColors = () => {
//     let hexaVal = "0123456789abcdef";
//     let colors = "#"
//     for (let i = 0; i < 6; i++) {
//       colors = colors+(hexaVal[Math.floor(Math.random()*16)]);
//     };
//     return colors;
// }

// const handlebtn1 = () => {
//      rgb1 = hexColors();
//     console.log(rgb1);
//     btn1.innerHTML = rgb1;
//     document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1},${rgb2})`;
//     copy.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
//   };
  
// const handlebtn2 = () => {
//      rgb2 = hexColors();
//     console.log(rgb2);
//     btn2.innerHTML = rgb2;
//     document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
//     copy.innerHTML = `background-image: linear-gradient(to right,${rgb1},${rgb2})`;
//   };
   
// btn1.addEventListener("click", handlebtn1);
// btn2.addEventListener("click", handlebtn2);

// copy.addEventListener('click', () => {
//   navigator.clipboard.writeText(copy.innerText);
// })




let btn1 = document.querySelector(".mybtn1");
let btn2 = document.querySelector(".mybtn2");
let copy = document.querySelector(".copycode");
let rgb1 = "#051937";
let rgb2 = "#A8EB12";

const hexVlaue = () => {
  const hex = "0123456789abcdef";
  let colors = "#";
  for(let i = 0; i<6; i++){
    colors = colors+(hex[Math.floor(Math.random()*16)]);

  };
  return colors;
}

const handlebtn1 = () => {
  rbg1 = hexVlaue;
  btn1.innerHTML = rgb1;
  document.body.style.backgroundImage =`linear-gradient(to right, ${rgb1},${rgb2})`;
  copy.innerHTML = `linear-gradient(to right, ${rgb1},${rgb2})`

}
const handlebtn2 = () => {
  rbg2 = hexVlaue;
  btn2.innerHTML = rgb2;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1},${rgb2})`;
  copy.innerHTML = `linear-gradient(to right, ${rgb1},${rgb2})`

}


btn1.addEventListener("click", handlebtn1);
btn2.addEventListener("click", handlebtn2);