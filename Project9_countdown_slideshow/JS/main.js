function countDown(){
    var seconds=document.getElementById("seconds").value;
    function tick(){
        seconds=seconds-1;
        TimeRanges.innerHTML=seconds;
        var timer= setTimeout(tick,1000);
        document.getElementById("timer").innerHTML=timer;
        if (seconds==-1){
            alert("Time's up!");
            clearTimeout(timer);
            timer.innerHTML="";
            document.getElementById("timer").innerHTML="";
        }
    }
    tick();
}

//PROJECT9_COUNTDOWN_SLIDESHOW SUBMISSION ASSIGNMENT
//Create A Slideshow
var slideIndex = 1;           //assign variable slideIndex
showSlides(slideIndex);       // call function showSlides()

function plusSlides(n) {      //declare function
  showSlides(slideIndex += n);
}

function currentSlide(n) {    //declare function
  showSlides(slideIndex = n);
}

function showSlides(n) {      //declare function
  var i;                                                    //declare variable
  var slides = document.getElementsByClassName("mySlides");  //declare variable and assign document.getElementsByClassName
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {                     //clicle for to 
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {                       //clicle for to
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}