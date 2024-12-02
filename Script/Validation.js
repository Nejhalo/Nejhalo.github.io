// validation
const form = document.getElementById('form');
const name = document.getElementById('name');
 const email = document.getElementById('email');
 const message = document.getElementById('message');

form.addEventListener('submit', function(e) {
     e.preventDefault();
    
     if(checkInputs()){
        form.submit()
     }
 });

 function checkInputs() {
     // trim to remove the whitespaces
     const nameValue = name.value.trim();
     const emailValue = email.value.trim();
     const messageValue = message.value.trim();
     let flag = true;

     if(nameValue === '') {
        setErrorFor(name, 'The name field is required.');
        flag = false;
     } else {
         setSuccessFor(name);
    }
    
     if(emailValue === '') {
              setErrorFor(email, 'The email field is required. ');
              flag = false;
    }
   else if (!emailValue.includes('@')) {
        setErrorFor(email, 'The email field must be a valid email address.');
        flag = false;
     } else {
         setSuccessFor(email);
     }
    
    if(messageValue === '') {
         setErrorFor(message, 'The message field is required.');
         flag = false;
     } else {
         setSuccessFor(message);
    }
   
    console.log(flag)
    return flag;
}
 function setErrorFor(input, message) {
     const formControl = input.parentElement;
    const small = formControl.querySelector('small');
     formControl.className = 'form-control error';
     small.innerText = message;

    }
  function setSuccessFor(input) {
     const formControl = input.parentElement;
     formControl.className = 'form-control success';
 }
    
 // function isEmail(email) {
 //     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
 // }