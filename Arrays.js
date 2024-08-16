// Arrays Data Struture all Methods //


// Defining Array //
let student1 = "Usman";
let student2 = "Omar";
let student3 = "Hassan";
//Creation of array//
let student = ["Usman", "Omar", "Hassan"];
console.log(student);

//Print length of Array//
let nums = ["Mustaiz", 16, 100];//Mixed array//
nums.length;
console.log(nums.length);//length = 3//
console.log(nums[0]);// This line print Mustaiz which is present at 0 index of array nums //

// Creating empty array//
let emptArr = [];

// Arrays are Mutable in JavaScript //
let number = ["ICT", "Lahore", "FSD", "Karachi"];
number[0] = "Multan";// This line change ICT to Multan //
console.log(number);

// Arrays Methods //

// Push Method // this add anything at the last of an array;
let fruit = ["Apple", "Banana", "Mango", "Grapes", "Guava"];
b = fruit.push("Orange");
console.log(fruit);
// Pop Method // delete anything from last of array and return it//
fruit.pop();
console.log(fruit);
// Unshift Method // add anything at the start of an array //
fruit.unshift("Cherry");
console.log(fruit);
// Shift Method // delete anything at the start of an array //
fruit.shift("Cherry");
console.log(fruit);
// Indexof Method // return index of something //
let car = ["Mercedies", "BMW", "Audi", "Tesla", "Haval", "Honda", "Toyota", "Lambergini"];
console.log(car.indexOf("Tesla"));
// Include Method // find something in an array //
car = ["Mercedies", "BMW", "Audi", "Tesla", "Haval", "Honda", "Toyota", "Lambergini"];
console.log(car.includes("Haval"));
// Concat Method // merge two arrays //
let vegetable = ["Onion", "Patato", "Tomato", "Ginger"];
fruit = ["Apple", "Banana", "Mango", "Grapes", "Guava"];
n = vegetable.concat(fruit);
console.log(n);
// Reverse Method // reverse ana array //
car = ["Mercedies", "BMW", "Audi", "Tesla", "Haval", "Honda", "Toyota", "Lambergini"];
m = car.reverse();
console.log(m);
// Slice Method // make copies of array //
let colors = ["red", "yellow", "green", "pink", "blue"];
p = colors.slice(3);
console.log(p);
// Splice Method // remove, replace,
colors = ["red", "yellow", "green", "pink", "blue"];
r = colors.splice(2);
console.log(r);
s = colors.splice(0, 1);
console.log(s);
// Sort Method // arranged array in ascending order //
colors = ["red", "yellow", "green", "pink", "blue"];
console.log(colors.sort());
let count = [23, 45, 6, 7, 32, 1, 5, 9, 0,];
console.log(count.sort());
// Const Array // cannot allow changes in array //
const arr = [1, 2, 3, 4];
console.log(arr);
arr = [2];
console.log(arr);// Not allowed //
// Nested Arrays // array in array //
let num = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];
console.log(num);
console.log(num.length);








