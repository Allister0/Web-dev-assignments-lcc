/**********
Date: May 26, 2023
Author: Allister Bell jr
Class: CITW 165
Exercise: Display greeting on console depending on the time of day  #
**********/

let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
}
else if (hourNow > 12) {
    greeting = 'Good afternoon!';
}
else if (hourNow > 0) {
    greeting = 'Good morning!';
}
else {
    greeting = 'Welcome!';
}
document.write('<h3>' + greeting + '</h3>');