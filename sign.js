function validate()
{
    var phonenumber=document.getElementById('phonenumber');
    var email=document.getElementById('email');
    var password=document.getElementById('password');
    var error1=document.getElementById("error1");
    var error2 = document.getElementById("error2");
    var error3=document.getElementById("error3");
    
    var regexpa =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
     var regexem=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')
    var mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))')
if(regexpa.test(phonenumber.value))
{
error1.style.color="green";
phonenumber.style.borderColor="green";
error1.innerHTML="<span>valid format</span>";
}
else{
error1.innerHTML="<span><I>this is not a valid phone number</I></span>";
error1.style.color="red";
phonenumber.style.borderColor="red";
return false;
}

    if(regexem.test(email.value))
       {
       error2.style.color="green";
       email.style.borderColor="green";
       error2.innerHTML="<span>valid format</span>";
    }
   else{
       error2.innerHTML="<span><I>invalid format</I></span>";
       error2.style.color="red";
       email.style.borderColor="red";
       return false;
   }

   if(strongPassword.test(password.value))
    {
    error3.style.backgroundColor = "green";
    error3.textContent = 'Strong';
} 
else if(mediumPassword.test(password.value)) 
{
    error3.style.backgroundColor = 'orange';
    error3.textContent = 'Medium';
}
 else {
    error3.innerHTML="<span>invalid format</span>";
    error3.style.backgroundColor = 'red';
    error3.textContent = 'Poor';
}
}


