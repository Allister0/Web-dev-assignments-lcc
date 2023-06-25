/**********
Date: 6/18/ 2020
Author: Allister Bell Jr
Class: CITW 165
Exercise: Exercise 5
**********/
function calc() {
    //initializing variables 
    var entry = parseInt(document.getElementById("score").value);
    var letterGrade;

    //if loop to determine letter grade
    if (entry >= 90) {
        letterGrade = "A";
    }
    else if (entry >= 80 && entry < 90) {
        letterGrade = "B";
    }
    else if (entry >= 70 && entry < 80) {
        letterGrade = "C";
    }
    else if (entry >= 60 && entry < 70) {
        letterGrade = "D";
    }
    else if (entry < 60) {
        letterGrade = "F";
    }
    else {
        letterGrade = "Invalid";
        window.alert("\t\t\t\t\tInvalid entry");
    }
    console.log(letterGrade);
    //displaying calculated letter grade in alert box 
    var el = document.getElementById("score");
    window.alert('\t\t\t\tNumber Grade = ' + entry + ' \n\t\t\t\tLetter Grade = ' + letterGrade);
}