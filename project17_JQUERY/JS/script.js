function fnImages() {
    var x = document.images.length;
    document.getElementById("demo1").innerHTML = x;
}
function fnCookies() {
    var x = document.cookie;
    document.getElementById("demo2").innerHTML = "Cookies associated with this document: " + x;
}
function fnForm(){
    var x = document.forms.length;
    document.getElementById("demo3").innerHTML = x;
    console.log("elements frm:"+x);
}