/* alert("Helllo, World!"); */
/*window.alert("Hello, World!"); */
var message="This is message alert!!";
window.alert(message);
document.write('Hello world!! <br>');
var A="This is another string!! <br>";
document.write(A);
document.write("Lisa told Bart \"Knock it off, Bart! Or I'll tell dad! \" <br> \"eat my shorts! \" Bart responded <br>");
document.write("\"Be who you are and say what you feel,"
+ "because those who mind don\'t matter and those who matter don\'t mind. \" "
+ "-Dr. Seuss" );
var B= "<br>Concatened " +"String";
document.write(B);
var Family= "The Arezzinis", Dad="Jeremiah", Mom="Hermoine", Daughter="Peenny", Son="Zorro";
document.write("<br>"+Dad);

var blues="I have the blues.";
var blues= blues.fontcolor("blue");
document.write("<br>"+blues+"<br>");
document.write(3+3*5);

function My_First_Function(){       //Defining a function and naming it
    var str="This text is green";    //Defining a variable and giving it a string value
    var result=str.fontcolor("green");  //Using a font color method on str variable
    document.getElementById("Green_Text").innerHTML=result;  //Putting the value
                                            //of result into HTML element with "Geen_Text" id
}