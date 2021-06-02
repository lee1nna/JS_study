// Array
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(daysOfWeek);
console.log(daysOfWeek[2]);

// Object
const hannaInfo = {
    name: "hanna",
    age: 23,
    gender: "Female",
};

console.log(hannaInfo);
console.log(hannaInfo.name);

// array inside object
// object inside array
const Info = {
    movies: ["Beggin Again", "Oldboy"],
    food: [
        {
            name:"kimchi", 
            fatty: false
        },
        {
            name:"cheese", 
            fatty: true
        }
    ]
};

console.log(Info);