function miDictionarity()       //Defining a function
{
    var Animal={                //Defining a dictionarity 
        Species:"Dog",
        //Color:"Black",
        Color:"Red",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    var Animal1={               //Defining another dictionarity 
        Species:"Dog",
        //Color:"Black",
        Color:"Red",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal1.Sound;       //delete statement that removes the key before its value
    document.getElementById("dictionarity").innerHTML=Animal.Color; //Putting the value of result into HTML element demoFunction
    document.getElementById("dictionarity1").innerHTML=Animal1.Sound; //Putting the value of result into HTML element demoFunction
}
