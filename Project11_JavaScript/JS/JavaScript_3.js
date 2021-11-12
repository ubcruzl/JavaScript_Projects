//HTML DATA ATTRIBUTES
function displayType(char){
    var charType=char.getAttribute("data-char-type");
    alert(charType+" is in the "+ char.innerHTML+ " universe!");
}