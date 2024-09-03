// factorial of a number 
// const factorial = (num ) =>{
//     if(num <= 0){
//         console.log("invalid number");
//     }else if(num == 0){
//         console.log("1");
//     }else{
//         let fact = 1;
//         for(let i = 1; i<=num; i++){
//             fact *= i;
//         }
//         return fact;
//     }
    
// }

// console.log(factorial(5))


// Create a program to check if a number is prime.
const num = 7;
for(let i = 2; i< num;i++){
    if(num % i == 0){
        console.log("not prime")
    }else{
        console.log("prime")
    }
}