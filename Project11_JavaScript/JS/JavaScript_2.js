//VALIDAR
function validate(form){  
    //var name=document.f1.name.value;  
    document.getElementById("valida1").innerHTML= "";
    document.getElementById("valida2").innerHTML= "";
    document.getElementById("valida3").innerHTML= "";
    var name=form.fname.value; //form.fname.value;
    var lname=form.lname.value;  
    var email=form.email.value;
    console.log("name: "+name);
    var status=false;  

    if(name.length<=2){  
        //form.valida.value=" <img src='unchecked.gif'/> Please enter your correct name";
        document.getElementById("valida1").innerHTML= "Please enter your correct name";  
        status=false;  
    }else{  
        document.getElementById("valida1").innerHTML="Correct name";  
        status=true;  
    }  
    if(lname.length<=2){  
        document.getElementById("valida2").innerHTML= " Please enter your last name"; 
        status=false;  
    }else{  
        document.getElementById("valida2").innerHTML="correct las tname";  
        status=true;  
    }  
    if (validaEemail(email)){
        document.getElementById("valida3").innerHTML="correct mail"; 
        status=true;  
    } 
    else{
        document.getElementById("valida3").innerHTML= "Please enter your correct email"; 
        status=false;  
    }
        
    
    return status;  
}  
//VALIDAR email
function validaEemail(email)  
{  
    var x=email;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
    {  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        return false; 
    }
    else{
        return true;
    }

}  