let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//STEP 1: Create an application that gets the number of days in a month. Display that result within the console window.
function getDaysInMonth(d) {
    let month = d.getMonth();
    let year = d.getFullYear();
    let daysInMonth = new Date(year, month+1, 0).getDate();
    return daysInMonth;
}
console.log(getDaysInMonth(new Date()));
console.log(getDaysInMonth(new Date(2022, 3))); //April 2022


//STEP 2: Create an application that gets the month name from a particular date. Display that result within the console window.
// function monthName(d) {
//     let month = d.getMonth();
//     return months[month];
// }
// console.log(monthName(new Date()));
// console.log(monthName(new Date(2022, 3, 1))); //April 1, 2022


//STEP 3: Create an application that tests whether a date is a weekend. Display that result within the console window.
// function isItWeekend(d) {
//     let day = d.getDay();
//     if (day === 0 || day === 6) {
//         return 'Weekend';
//     } else {
//         return 'Weekday';
//     }   
// }
// console.log(isItWeekend(new Date())); //Today
// console.log(isItWeekend(new Date(2022, 4, 1))); //May 1, 2022
// console.log(isItWeekend(new Date(2022, 4, 6))); //May 6, 2022


//STEP 4: Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.
// function getYesterday(d) {
//     let today = d.getDay();
//     let yesterday = today - 1;
//     return days[yesterday];
// }
// console.log(getYesterday(new Date()));


//STEP 5: Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.
// function dayOfTheWeek(d) {
//     let day = d.getDay();
//     return (days[day].charAt(0));
// }
// console.log(dayOfTheWeek(new Date()));

