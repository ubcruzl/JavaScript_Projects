//SWITCH FUNCTION
function fnSwitch(){
  var e = document.getElementById("option");
  var valueColor = e.value;
  console.log("selected: "+valueColor);
  let color;
  switch(parseInt(valueColor)) {        //switch statement performs different actions based on the conditions presented to it
    case 0:
      color = "white";
      break;
    case 1:
      color = "yellow";
      break;
    case 2:
      color = "green";
      break;
    case 3:
      color = "blue";
      break;
    case 4:
      color = "pink";
      break;
    case 5:
      color = "purple";
      break;
    case  6:
      color = "red";
  }
  document.getElementById("output").innerHTML = "Color is " + color;
  document.getElementById("div-container").style.backgroundColor=color;   //change style backgroundColor 
}

//GETELEMENTSBYCLASSNAME() METHOD
function fnHelloWorld(){
  var A =document.getElementsByClassName("click");
  A[0].innerHTML="The Text has changed!".fontcolor("red");
}

//FUNCTION CANVAS 
function fnCanvas(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  
  // Create gradient
  var grd = ctx.createRadialGradient(75,50,5,90,60,100);
  grd.addColorStop(0,"red");
  grd.addColorStop(1,"white");
  
  // Fill with gradient
  ctx.fillStyle = grd;
  ctx.fillRect(10,10,150,80);
}
// Create function gradient
function fnCanvasGradient(){
  var c = document.getElementById("myCanvas1");
  var ctx = c.getContext("2d");
  var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);     // canvas createLinearGradient() Method.
  my_gradient.addColorStop(0, "black");         
  my_gradient.addColorStop(1, "white");
  ctx.fillStyle = my_gradient;
  ctx.fillRect(20, 20, 150, 100);
}

function fnArrow(){var hello;

  hello = () => "Hello World!";   //Arrow Function without the brackets or the return keyword
  
  document.getElementById("arrow").innerHTML = hello();
  var car;
  car= (val)=> "These are my favorite car brans"+ val;
  document.getElementById("arrowCar").innerHTML = car("Honda, Ford and nissan.");
}