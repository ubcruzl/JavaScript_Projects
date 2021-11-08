function MyFirstFunction(){       //Defining a function and naming it
    var str="This text is blue";    //Defining a variable and giving it a string value
    var result=str.fontcolor("blue");  //Using a font color method on str variable
    document.getElementById("Green_Text").innerHTML=result;  //Putting the value
                                            //of result into HTML element with "Geen_Text" id
}
function MyFunctionDate(){                              //Defining a function
    document.getElementById('demo').innerHTML=Date()
}
function myFunctionError() {                            //Defining a function
    alert('The image could not be loaded.');
}
function myFunctionConcatenate() {                      //Defining a function
    var sentence="I am learnin Java Script";            //Defining a variable 
    sentence+= " a lot from this book!";                //Concatenate string to variable
    document.getElementById("concatenate").innerHTML=sentence.fontcolor("green"); //Putting the value
                                                        //of result into HTML element with "concatenate" id an assing font color green
}