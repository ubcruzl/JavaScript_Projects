function demoMyFunction() {                     //Defining a function
    var xa=factorial(10);                        //Defining a variable  and call function factorial
    var x=50, y=1000;
    //document.getElementById("demoFunction").innerHTML = myFunction(4,3);
    document.getElementById("mathFactorial").innerHTML=xa; //Putting the value of result into HTML element demoFunction
    document.getElementById("mathSquare").innerHTML=square(100);
    document.getElementById("mathAdition").innerHTML=addition(x,y);
    document.getElementById("mathSubstraction").innerHTML=substraction(x,y);
    document.getElementById("mathDivision").innerHTML=division(x,y);
}
function moreFunction() {                     //Defining a function
    var a=50, b=1000;                    //Defining variables 
    document.getElementById("moreMath").innerHTML=moreMath(a,b); //Putting the value of result into HTML element demoFunction
}
function functionModulus() {              //Defining a function
    var a=50, b=1000;                    //Defining variables 
    document.getElementById("fmModulus").innerHTML=modulus(a,b); //Putting the value of result into HTML element demoFunction
}
function functionNegationOperator() {              //Defining a function
    var a=50;                    //Defining variables 
    document.getElementById("fNegation").innerHTML=negationOperator(a); //Putting the value of result into HTML element demoFunction
}
function functionIncrement() {              //Defining a function
    var a=50;                    //Defining variables 
    document.getElementById("increment").innerHTML=increment(a); //Putting the value of result into HTML element demoFunction
    document.getElementById("decrement").innerHTML=decrement(a); //Putting the value of result into HTML element demoFunction
}
function functionRandom() {              //Defining a function
    var a=50;                    //Defining variables 
    document.getElementById("random").innerHTML=random(); //Putting the value of result into HTML element demoFunction
}
function functionPow() {              //Defining a function
    var a=32, b=2;                    //Defining variables 
    document.getElementById("power").innerHTML=pow(b,a); //Putting the value of result into HTML element demoFunction
}
function addition(x,y){
    return x+y;
}
function substraction(x, y){
    return x-y;
}
function multiplication(x, y){
    return x*y;
}
function division(x, y){
    return y/x;
}
function factorial(x){                          //Defining a function
    if (x==0){                                  //desicion
        return 1;
    }
    else{ return x*factorial(x-1);              //Function recursive
    }
}
function square(x){                          //Defining a function
    return Math.sqrt(x)
}
function moreMath(x,y){
    return (x+y)*10/1-5
}
function modulus(x,y){
    return y%x;
}
function negationOperator(x){
    return -x;
}
function increment(x){
    return ++x;
}
function decrement(x){
    return --x;
}
function random(){
    return Math.random()*1000;
}
function pow(x,y){
    return Math.pow(y,x);
}