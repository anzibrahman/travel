function validate()
{
    var email=document.getElementById('email');
    var password=document.getElementById('password');
    var error1=document.getElementById("error1");
    var error2 = document.getElementById("error2");
    var regexem=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')
    var mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))')

   

    if(regexem.test(email.value))
       {
       error1.style.color="green";
       email.style.borderColor="green";
       error1.innerHTML="<span>valid format</span>";
    }
   else{
       error1.innerHTML="<span><I>invalid format</I></span>";
       error1.style.color="red";
       email.style.borderColor="red";
       return false;
   }

   if(strongPassword.test(password.value))
    {
    error2.style.backgroundColor = "green";
    error2.textContent = 'Strong';
} 
else if(mediumPassword.test(password.value)) 
{
    error2.style.backgroundColor = 'orange';
    error2.textContent = 'Medium';
}
 else {
    error2.style.backgroundColor = 'red';
    error2.textContent = 'Poor';
}
}


