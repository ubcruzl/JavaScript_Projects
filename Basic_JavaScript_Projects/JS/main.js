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