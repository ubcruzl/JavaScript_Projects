// Step 1 setup the xml http request object
var ajax=new XMLHttpRequest();
//Step 2 prepare the open ajax request
ajax.open('GET','./content.html');
//Step 3 define the ajax request
ajax.onreadystatechange=function() {
    if (ajax.readyState=4) {
        document.getElementById('content').innerHTML=ajax.responseText;
    }
}
//Step 4 define the ajax response callback method
function getContent(){
    ajax.send();
    document.getElementById('btn_content').style.display='none';
}

//DEMO 1..... The responseText Property The responseText property returns the server response as a JavaScript string
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "./ajax_info1.txt");
    xhttp.send();
}
//DEMO 2.....The getResponseHeader() Method returns specific header information from the server response.
function loadDoc1(){
    const xhttp=new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo1").innerHTML = this.getResponseHeader("Last-Modified");
    }
    xhttp.open("GET", "./ajax_info1.txt");
    xhttp.send();
}
//DEMO 3..... The getAllResponseHeaders() Method returns all header information from the server response.
function loadDoc2(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
    document.getElementById("demo2").innerHTML = this.getAllResponseHeaders();
    }
    xhttp.open("GET", "./ajax_info1.txt");
    xhttp.send();
}
function loadXML() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
    const xmlDoc = this.responseXML;
    const x = xmlDoc.getElementsByTagName("ARTIST");
    let txt = "";
    for (let i = 0; i < x.length; i++) {
        txt = txt + x[i].childNodes[0].nodeValue + "<br>";
    }
    document.getElementById("demo3").innerHTML = txt;
    }
    xhttp.open("GET", "./cd_catalog.xml");
    xhttp.send();
}

// EXAMPLE readyState
var xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readyState); // readyState will be 0

xhr.open('GET', '/api', true);
console.log('OPENED', xhr.readyState); // readyState will be 1

xhr.onprogress = function () {
    console.log('LOADING', xhr.readyState); // readyState will be 3
}
xhr.onload = function () {
    console.log('DONE', xhr.readyState); // readyState will be 4
}
