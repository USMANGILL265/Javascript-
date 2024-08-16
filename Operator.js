console.log(" Hello World! I am JavaScript");
// Performing Operations// 
let a = 10;
b = 5;
console.log("Sum is:", a + b);

let pencil = 10;
eraser = 10;
// output = "Total:" + (pencil + eraser) + " rupees";
output = `Grand Total= ${pencil + eraser} rupees`;
console.log(output);

// Arithmatic Operators//
let c = 20;
d = 5;
console.log(c + d);//25//
console.log(c - d);//15//
console.log(c * d);//100//
console.log(c / d);//4//
console.log(c ** d);//3200000//
console.log(c % d);//0//
console.log(c++);//20//
console.log(++c);//22//
let ag = 18;
if (ag < 18) {
    console.log("You Cannot drive a Vehicle");//You Cannot drive a Vehicle//

}
else {
    console.log("You drive a Vehicle");
}

let size = "L";

if (size == "XL") {
    console.log("Price is 250");
} else if (size == "L") {
    console.log("Price is 200");//200//
}
else if (size == "M") {
    console.log("Price is 150");
}
else {
    console.log("Price is 50");
}

let marks = 90;
if (marks >= 33) {
    console.log("Pass");

    if (marks >= 90) {
        console.log("grade: A+");
    }
    else {
        console.log('A');
    }
}
else (
    console.log("Fail")
)

//Logical And Operator//
let agess = 40;

if (agess = 20 && agess > 20) {
    console.log("pass");
    console.log("mm");
}
else {
    console.log('not mature');
}

let string = "apple";
if (string.length > 3 && string[0] == 'a') {
    console.log("It is a good String");
}
else {
    console.log("It is not a good String");
}
//Logical Equal Operator//
let num = 12;
if ((num % 3 == 10) && (num + 1 == 15) || (num - 2 == 11)) {
    console.log('safe');
}
else {
    console.log(" unsafe");
}
//Switch Statement//
let color = "red";
switch (color) {
    case 'red':
        console.log("Stop");
        break;
    case 'yellow':
        console.log("Ready");
        break;
    case 'green':
        console.log("GO");
        break;
}

let day = 4;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}