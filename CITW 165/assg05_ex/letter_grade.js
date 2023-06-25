
function calc() {
        var entry = parseInt(document.getElementById("score").value);
        var letterGrade;
        //write the if statements in this area below, leaving the last curly brace at the end of the script.
        if (entry >= 90) {
                letterGrade = 'A';
        }
        else if (entry >= 80 && entry < 90) {
                letterGrade = 'B';
        }
        else if (entry >= 70 && entry < 80) {
                letterGrade = 'C';
        }
        else if (entry >= 60 && entry < 70) {
                letterGrade = 'D';
        }
        else {
                if (entry < 60) {
                        letterGrade = 'F';
                }
                else {
                        letterGrade = "Invalid";
                        window.alert("\t\t\t\t\tInvalid entry");
                }
        }
        console.log(entry);
        console.log(letterGrade);
        var el = document.getElementById("score");
        window.alert('\t\t\t\tNumber grade = ' + entry + " \n\t\t\t\tLetter grade = " + letterGrade);
}//don't remove this line