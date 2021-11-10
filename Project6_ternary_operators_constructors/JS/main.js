//NOT OPERATOR ASSIGNMENT
function rideFunction(){             //declare function
    var height, canRide;                                  //declare variable
    height= document.getElementById("height").value;
    canRide=(height<52)? "You are too short".fontcolor("red"):"You are tall enough".fontcolor("blue");
    document.getElementById("ride").innerHTML=(canRide+" to ride.");
}
// function using HTML and JavaScript that utilizes a ternary operation
function voteFunction(){             //declare function
    var age, canVote;                                  //declare variable
    age= document.getElementById("age").value;
    canVote=(age<18)? "You are not old enough to vote".fontcolor("red"):"You can vote!".fontcolor("blue"); //ternary operators A ternary operator operates on three values. 
                                                                        //It can be used to assign a value to a variable based on a condition
    document.getElementById("vote").innerHTML=canVote;
}
//KEYWORDS
function vehicle(make,model,year,color){             //declare function 
    this.vehicleMake=make;
    this.vehicleModel=model;
    this.vehicleYear=year;
    this.vehicleColor=color;
}
var Juan= new vehicle("Jetta","clasico",2010,"Gray");
var Lalo= new vehicle("Ford","Explorer",2018,"Red");
var Ben= new vehicle("Honda","CRV",2020,"white");
function myFunction(){
    document.getElementById("keyWordsAndConstructors").innerHTML="Juan drives a "+Juan.vehicleColor+ "-colored "+Juan.vehicleModel + " manufactured in "+ Juan.vehicleYear;
}

function myFunctionKeyWord(){
    document.getElementById("NewAndThis").innerHTML="Lalo drives a "+Lalo.vehicleMake+ " " +Lalo.vehicleColor+ "-colored "+Lalo.vehicleModel + " manufactured in "+ Lalo.vehicleYear;
}
//constructor function that uses the “new” and “this” keywords null
function Student(first, last, email,phone_number) {        //declare function student
    this.firstName = first;                                 //Assign properties
    this.lastName = last;
    this.age = null;
    this.email=email;
    this.phone_number=phone_number;
    this.education=null;                    //Assign a variable the value of a reserved word "null"
  }
  const Ubaldo= new Student("Ubaldo","Cruz", 3,"ubcruzl@gmail.com","55...")
  function fnPerson(){
    document.getElementById("person").innerHTML="Ubaldo is "+Ubaldo.firstName+ " " +Ubaldo.lastName+ " age: "+Ubaldo.age + " email: "
    + Ubaldo.email+" phone number: "+Ubaldo.phone_number +" education: " +Ubaldo.education;
  }
//NESTED FUNCTIONS ASSIGNMENT
function nestedFunction(){          //declare function
    var result;
    document.getElementById("nestedFunction").innerHTML="calcPow(2,10)="+calcPow(2,10);
    function calcPow(x,y){
        function fPow(x,y){             // A nested function is a function under another function that is connected somehow.
            result=Math.pow(x,y);
        }
        fPow(x,y)                       // call a nested function
        return result;
    }
}
function nestedFunction_(){          //declare function
    var result,exponent;
    exponent= document.getElementById("exponent").value;
    document.getElementById("resultPow").innerHTML=calcPow(2,exponent);
    function calcPow(x,y){
        function fPow(x,y){             // A nested function is a function under another function that is connected somehow.
            result=Math.pow(x,y);
        }
        fPow(x,y)                       // call a nested function
        return result;
    }
}