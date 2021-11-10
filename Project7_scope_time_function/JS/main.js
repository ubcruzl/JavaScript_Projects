// SCOPE
//VARIABLE GLOBAL
var X=10;       //declare variable global

function addNumbers_1(){             //declare function
    document.write(" var X=10; X is variable global, 20+X= <br>");
    document.write(20+X+"<br>");
}
function addNumbers_2(){             //declare function
    document.write(" X+100 = <br>");
    document.write(X+100);
}
//VARIABLE LOCAL
addNumbers_1();             
addNumbers_2();
document.write("<br>");
function addNumbersVarLocal_1(){             //declare function
    varLocal=20;                               //declare variable local 
    document.write(" varLocal=20, 20+varLocal= ");
    document.write(20+varLocal);
    console.log(20+varLocal);
    document.write("<br>");
}
function addNumbersVarLocal_2(){             //declare function
    document.write(varLocal+100);            //Write in html
    console.log(varX+100);                  //variable varX is not definied
    document.write("<br>");
}

addNumbersVarLocal_1();                     //call function
addNumbersVarLocal_2();

// PROJECT7_SCOPE_TIME_FUNCTION SUBMISSION ASSIGNMENT
//sentence if else
function getDate(){                     //declare function
    var hour=new Date().getHours();
    if (hour<12 == hour>0)              //sentence IF
    {
        document.getElementById("message").innerHTML=hour +" Good morning".fontcolor("green");
    }
    else if (hour>=12 == hour<18) {     //sentence IF ELSE
        document.getElementById("message").innerHTML=hour +" Good afternoon".fontcolor("red");
    }
    else {                               //sentence  ELSE
        document.getElementById("message").innerHTML=hour + " Good evening".fontcolor("blue");
    }
}
function ageFunction(){                 //declare function
    age=document.getElementById("age").value;
    if (age<=3) {document.getElementById("messageAge").innerHTML="Infance Stage".fontcolor("green"); }                   //sentence IF
    else if (age>3 && age<=6) {document.getElementById("messageAge").innerHTML="Early Childhood".fontcolor("green"); }
    else if (age>6 && age<=8) {document.getElementById("messageAge").innerHTML="Middle Childhood".fontcolor("green"); } //sentence IF ELSE
    else if (age>=9 && age<11) {document.getElementById("messageAge").innerHTML="Late Childhood".fontcolor("green"); }
    else if (age>=12 && age<20) {document.getElementById("messageAge").innerHTML="Adolescence".fontcolor("green"); }
    else if (age>=20 && age<35) {document.getElementById("messageAge").innerHTML="Early Adulthood".fontcolor("green"); }
    else if (age>=35 && age<50) {document.getElementById("messageAge").innerHTML="Midlife ".fontcolor("green"); }
    else if (age>=50 && age<80) {document.getElementById("messageAge").innerHTML="MidlMature".fontcolor("green"); }
    else if(age>80){document.getElementById("messageAge").innerHTML="Late Adulthood".fontcolor("green");}
}