//Object Lliterals//
const student = {
    Name: "Usman Gill",
    Age: 20,
    Marks: 90
};

//Creating Object Literals//
const item = {
    Name: "Omar",
    Class: "MBBS",
    Grade: "A"
};
console.log(item);
//Change values In Object Literals//
item.Class = "Cs";
console.log(item);
//Adding Values in Object Literals//
item.Semester = "3rd";
console.log(item);
//Delete values in Object Literals//
delete item.Name;
console.log(item);

//Nesting Object Literals//
const classinfo = {
    Student1: {
        Name: "Usman Gill",
        Class: "BsCs 2nd",
        RollNo: 2
    },
    Student2: {
        Name: "Omar Gill",
        Class: "BsCs 4th",
        RollNo: 3
    },
    Student3: {
        Name: "Dawood",
        Class: "BsCs 3rd",
        RollNo: 4
    }
};
console.log(classinfo);

//Arrays Of Objects//

const classInfo = [
    {
        Name: "Mustaiz",
        Class: 9,
        Age: 16,
    },
    {
        Name: "Musa",
        Class: 6,
        Age: 13,
    },
    {
        Name: "Ayan",
        Class: 2,
        Age: 9,
    },
    {
        Name: "Abdullah",
        Class: 7,
        Age: 14,
    },
];
console.log(classInfo);
