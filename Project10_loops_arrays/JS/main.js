function countToTen(){    //declare function
  var digit="";
  var X=1;
  while(X<11){    //while loop loops through a block of code for as long as a specified condition is tru
    digit+="<br>"+X;  // <br> tag within our string to cause spacing between lines of text.
    X++;          //++ is used to increment (add one) in JavaScript.
  }
  document.getElementById("counting").innerHTML=digit;
}
function lengthString(){
  string=document.getElementById("string").innerText;  //declare function
  document.getElementById("lenth").innerHTML=string.length; //The length property returns the length of a string
}
function forLoop(){
  var instruments=["Guitarr","Drums","Piano","Bass","Violin","Tumpet","Flaute","Batery"];
  var content="";
  var Y;
  //FOR LOOPS IN JAVASCRIPT
  for (Y=0; Y<instruments.length;Y++){    //The length property returns the length of a string
    content+=instruments[Y]+"<br>";
  }
  document.getElementById("instruments").innerHTML=content;
}
function catPictures(){ //declare function
  var catPicture=[];      //declare array
  catPicture[0]="sleeping";
  catPicture[1]="playing";
  catPicture[2]="eating";
  catPicture[3]="purring"; //four pieces of data are called elements
  catPicture[4]="walking";
  catPicture[5]="running";
  catPicture[6]="boring";
  document.getElementById("catalog").innerHTML="In this picture, the cat is: "
  +catPicture[2] + ".";   //properties of the object
}

function constantFunction(){
  const instrument={type:"guitarr",brand:"Fender", color:"black", zize:"small",};
  instrument.color="blue";
  instrument.price="$800";
  instrument.size="big";
  document.getElementById("constant").innerHTML="The cost of the "
  +instrument.type + " was "+ instrument.price + "and the zize is "+instrument.size;
}

//The let keyword 
function fLet1(){
  var varX=82;
  document.write(varX);
  {                               // blocks of code contained within curly brackets – commonly loops.
    let varX=33;                  //The let keyword declares variables that can have block scope. 
    document.write("<br>"+varX);
  }
  document.write("<br>"+varX);
}
function fLet2(){
  var varX=82;
  document.write(varX);
  {                               // blocks of code contained within curly brackets – commonly loops.
    var varX=33;                  //usin var
    document.write("<br>"+varX);
  }
  document.write("<br>"+varX);
}
//RETURN STATEMENT CHALLENGE
function returnStatement(){       
  function myFunction(name) {     // how to use the JavaScript return statement.
    return "Hello " + name;
  }
  document.getElementById("statement").innerHTML = myFunction("Ubaldo");
}
function objectCar(){
  let car={                 //create an object using the let keyword
    make:"Vw",              //An object is a data structure used to store different types of data types.
    model:"Jetta Clasic",   //properties are: make, model, year and color.
    year:"2010",
    color:"Red",
    description:function() {  //Methods are actions that can be performed on objects. In JavaScript, they are stored within properties as functions.
      return "The car is a  "+this.year + " "+this.color+" "+ this.make+ " "+this.model;
    }
  }
  document.getElementById("letObject").innerHTML=car.description();
}

//function continue
function fnContinue(){
  let text = "";
  for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }    //continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
    text += "The number is " + i + "<br>";
  }
  document.getElementById("statement2").innerHTML = text;
}

//function break
function fnBreak(){
  const cars = ["BMW", "Volvo", "Saab", "Ford"];
  let text = "";
  list: {
    text += cars[0] + "<br>"; 
    text += cars[1] + "<br>"; 
    break list;                   //The break statement "jumps out" of a loop.
    text += cars[2] + "<br>"; 
    text += cars[3] + "<br>"; 
  }
  document.getElementById("statement2").innerHTML = text;
}