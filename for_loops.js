// For Loop in JavaScript //

//for loop ---> use to itrate a piece of code //
for (let i = 0; i < 5; i++) {
    console.log(i);
}

 // print even numbers//

for (let i = 2; i <= 16; i = i + 2) {
    console.log(i);
}
 // print odd numbers//

for (let i = 1; i <= 15; i = i + 2) {
    console.log(i);
}
 // infinite for loops //
for (let i = 1; i >= 0; i++) {
    console.log(i);
}
// print Multiplication table of 5 //
for (let i = 5; i <= 50; i= i+5) {
    console.log(i);
}

let n = prompt("Enter the integer you want to print table");
n = parseInt(n);
for (let i = n; i <= n * 10; i = i + n) {
   console.log(i);
}
// nested for loops //

for (let i = 1; i < 5; i++) {
   for (let j = 1; j <= 7; j++) {
      console.log(j);
   }
}
