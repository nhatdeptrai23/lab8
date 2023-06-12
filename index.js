function init() {
    var user = document.getElementById("user");
    var check = document.getElementById("password2")
    var form = document.getElementById("form")
    check.addEventListener("keyup", checkPass)

    form.addEventListener("submit", verifyPassword)
    user.addEventListener("mouseover", show);
    user.addEventListener("mouseout", hide);
}

function show() {
    var tooltip = document.getElementById("sidTip");
    tooltip.style.display = "inline";
}

function hide() {
    var tooltip = document.getElementById("sidTip");
    tooltip.style.display = "none";
}

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password1");

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
});

const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});

function checkPass() {
    if (document.getElementById('password1').value ==
      document.getElementById('password2').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching';
    }
  }
  function verifyPassword() {  
    var pw = document.getElementById("password1").value;  
     
    if(pw == "") {  
       document.getElementById("message1").innerHTML = "Null!";  
       return false;  
    }  
      
    if(pw.length < 8) {  
       document.getElementById("message1").innerHTML = "**Password length must be atleast 8 characters";  
       return false;  
    }  
     
    if(pw.length > 15) {  
       document.getElementById("message1").innerHTML = "**Password length must not exceed 15 characters";  
       return false;  
    } else {  
       alert("Password is correct");  
    }  
  }  


window.onload = init;