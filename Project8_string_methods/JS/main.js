// SCOPE
//VARIABLE GLOBAL
var X=10;       //declare variable global

function fullSentence(){             //declare function
    var part1="I have ";
    var part2="made this ";
    var part3="into a complete ";
    var part4="sentence.";
    var wholeSentence=part1.concat(part2,part3,part4); //concat() method concatenates (connects) two or more strings
    document.getElementById("concatenate").innerHTML=wholeSentence.fontcolor("green");
}
function sliceMethod(){              //declare function
    var sentence="All work and no play makes Jhony a dull boy.";
    var section=sentence.slice(27,33); // slice() method is a string method that extracts a section of a string and then returns the extracted section in a new string 
    document.getElementById("slice").innerHTML=section;
}
function lengthString(){              //declare function
    var text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // The length property returns the length of a string
    document.getElementById("lenght").innerHTML=text.length;
}
function toUpperCase(){
    var text = "Hello World!";
    var result = text.toUpperCase();                    //converts a string to uppercase letters
    document.getElementById("upper").innerHTML=result;
}

function fSearch(){
    var text = "Hello World!, Mr. Blue has a blue house!";
    document.getElementById("search").innerHTML=text.search(/blue/i); //searches a string for a specified value
}
//Number methods assist you in working with numbers. 
function fNumberToString(){                     //declare function
    var number = 1998;
    document.getElementById("numberToString").innerHTML=number.toString(); //Number methods assist you in working with numbers
}

//Number methods assist you in working with numbers. 
function fToPrecision(){                     //declare function
    var number1 = 12938.3322094534857345;
    document.getElementById("prescision").innerHTML=number1.toPrecision(12);  // toPrecision() method formats a number to a specified length
}