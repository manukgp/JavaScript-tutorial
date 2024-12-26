// Date time in JS

let date = new Date()
// console.log(date.toDateString());
// console.log(typeof date);

// let newDate = new Date(2023, 0, 3)           // yyyy-mm-dd
let newdate = new Date(2023, 0, 3, 5, 30)       // yyyy-mm-dd hr:min:sec
// console.log(newdate.toLocaleString());

let myDate = new Date()
// console.log(myDate.getTime());               // in miliseconds

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
