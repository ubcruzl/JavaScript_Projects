document.write("<br> typeof \"Word\" : ")
document.write(typeof "Word"); //gives the data type of a string 
document.write("<br> typeof 3: ");
document.write(typeof 3);      // gives the data type of a number
document.write("<br> data type typeof 3.55: ");
document.write(typeof 3.55);  //gives the data type of a number
document.write("<br> data type \"10\"+5: ");
document.write("10"+5);     // type coercion converts the value to the type it chooses

function typeNumber(){      //declare function
    document.getElementById("Test").innerHTML=0/0; //cause NaN (short for “Not a Number”)
    document.getElementById("Test1").innerHTML=isNaN('This is a string');  // check whether or not something is a number 
    document.getElementById("Test2").innerHTML=isNaN('007');        // check whether or not something is a number 
}
document.write("<br> display infinity 2E310: ");
document.write(2E310); //display “infinity” (higher than our maximum floating point number)  
document.write("<br> display -infinity -2E310: ");
document.write(-2E310); //display “-infinity”
document.write("<br>Boolean values 10>2: ");
document.write(10>2);
document.write("<br>Boolean values 10<2: ");
document.write(10<2);
console.log(2+2);  //Display 4 in console
console.log(10<2); //Display “false” in the console using Boolean logic 

//TRIPLE EQUAL SIGNS ASSIGNMENT
document.write("<br>  comparison 10===10: ");
document.write(10===10);  //== is used to show that a comparison should be made.
X=82;
Y="82";
document.write("<br>  comparison 82===\"82\": ");
document.write(X===Y);  //== is used to show that a comparison should be made.
A="MAGNUS";
B="MAGNUS";
document.write("<br>  comparison \"MAGNUS\"===\"MAGNUS\": ");
document.write(A===B);  //== is used to show that a comparison should be made.: 

//LOGICAL OPERATORS
document.write("<br> &&, || operators determines the logic between values or variables 10>2 && 10>4:");
document.write(10>2 && 10>4);
document.write("<br> 1>2 && 10>4: ");
document.write(1>2 && 10>4);
document.write("<br> 1>2 || 10>4: ");
document.write(1>2 || 10>4);
document.write("<br> 1>2 || 10>40: ");
document.write(1>2 || 10>40);
//NOT OPERATOR ASSIGNMENT
function notFunction(){                                      //declare function
    document.getElementById("Not").innerHTML=!(201>101);    // assign id= Not element in html result NOT OPERATOR
    document.getElementById("doubleNot").innerHTML=!(90>101);   // assign id= doubleNot element in html result NOT OPERATOR
}
