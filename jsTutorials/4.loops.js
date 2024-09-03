// let num =1;
// for( num = 1; num<=10; num++){
//     console.log(num)
   
// }

// sum of numbers from 1 to 10 using for loop

// let sum = 7;
// let prime = true;
// for(let i = 2; i < sum; i++){
//     if (sum%i ===0 ) {
//         prime = false;
//         break;
//     }
// }


// if (prime) {
//     console.log("prime number");
// }else{
//     console.log("not prime")
// }


// table of 5

// let table = 5;

// for(let i = 1; i<=10; i++){
//     console.log(`5 x ${i} = ${table*i}`)
// }

// leap year 

// let year = 2020;
// if((year%4 == 0 && year != 100 )|| year%400 == 0){
//     console.log("leap year")
// }else{
//     console.log("not a leap year")
// }



// let pattern = "";
// for(let i =1; i<=5; i++){
   
//     for(let j =5; j>=i; j--){
//         pattern += "+";
//     }
//     pattern += "\n";
// }
// console.log(pattern)

// let rows = 5;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    for (let num = rows; num >= n; num--) {
//       pattern += num;
//    }
//    pattern += "\n";
// }
// console.log(pattern);


// questions
 
// for loop print even numbers between 10 to 40;
// for(let i =10; i<=40; i++){
//    if(i%2 == 1){
//       console.log(i);
//    }
// }


// 2
let loggedIn = false;

while(loggedIn = false){
   console.log("incorrect login")
   if(i <= 3){
      console.log("successfully logged in")
      break;
     
   }
   i++
   
}


// let score = 1;

// while (true){
//     console.log("infinite loop")
//     if(score >= 3){
//         break;
//     }
//     score++;
// }

// console.log("done with the loop")


// q1
// let loggedIn = false;
// let counter = 1;

// while (!loggedIn){
//     console.log("success");
//     if(counter >= 3){
//         loggedIn = true;
//         // counter += loggedIn;
//         // break;
//     }
    
//     counter++;
// }

// console.log("successfully logged in")

// q2

// let num = 10;

// while(num <= 40){
//     if(num%2==0){
//         console.log(num);
//     }
//     num++;
// }

// q3

let checkpoint = 0;
let count = 1;

while(count <= 100){
    if(count == 50){
        console.log("half way there");
        count++;
        continue;
    }else if(count == 100){
        console.log("all done");
        count++;
        continue;
    }else  if(count %10 ==0){
        console.log(`checkpoint ${count}`)
        
    }
    count++;
}