// Email validation
var form = document.getElementById('form');
var email = document.getElementById('emailError');
var checked = document.getElementById('checkBoxError');
var successWin = document.getElementById('successWindow');
var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var emailAccept =[0, 0];

form.addEventListener("submit", preventDef, false);

function preventDef(event){
    event.preventDefault();
}
function onClickCheck(){
  var checkBox = document.getElementById('myCheck').checked;
  var emailValue = document.getElementById('email').value;
  if(checkBox == false){
    checked.innerHTML = "You must accept the terms and conditions";
  }else{
    checked.innerHTML = "";
    emailAccept[0] = 1;
  }
  var str = emailValue;
  var n = str.search("co");
  var lengthEmail = emailValue.length;
  if(n > 0 && (n + 2) == lengthEmail){
    email.innerHTML = "We are not accepting subscriptions from Colombia emails";
  }else{
  if(emailValue.match(regex)){
    email.innerHTML = "";
    emailAccept[1] = 1;
  }else{
    if(emailValue.length == 0){
      email.innerHTML = "Email address is required";
      
    }else{
      email.innerHTML = "Please provide a valid e-mail address";
      
    }
  }
}
}


function checkClick(){
  var checkBox1 = document.getElementById('myCheck').checked;
  if(checkBox1 == true){
    checked.innerHTML = "";
    emailAccept[0] = 1;
    eventAble();
  }else{
    checked.innerHTML = "You must accept the terms and conditions";
    emailAccept[0] = 0;
    form.addEventListener("submit", preventDef, false);
  }
}
function inputCheck() {
  setTimeout(function(){
    var emailValue = document.getElementById('email').value;
    var str = emailValue;
    var n = str.search("co");
    var lengthEmail = emailValue.length;
    if(n > 0 && (n + 2) == lengthEmail){
      email.innerHTML = "We are not accepting subscriptions from Colombia emails";
      emailIncorrect();
    }else{
    if(emailValue.match(regex)){
      email.innerHTML = "";
      emailAccept[1] = 1;
      eventAble();
    }else{
      if(emailValue.length == 0){
        email.innerHTML = "Email address is required";
        emailIncorrect();
      }else{
        email.innerHTML = "Please provide a valid e-mail address";
        emailIncorrect();
      }
    }
  }
  },1)
}
    

function emailIncorrect(){
    emailAccept[1] = 0;
    form.addEventListener("submit", preventDef, false);
}

function eventAble(){
    if(emailAccept[0] == 1 && emailAccept[1] == 1){
        form.removeEventListener("submit", preventDef, false);
    }
}