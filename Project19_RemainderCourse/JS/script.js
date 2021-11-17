
function phoneNumber(inputtxt)
{
    var phoneno = /^\d{10}$/;
    if(inputtxt.value.match(phoneno))
    {
        alert("Correct Phone Number");
        return true;
    }
    else
    {
       alert("Not a valid Phone Number");
       return false;
    }
}
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
document.getElementById("myForm").style.display = "none";
}