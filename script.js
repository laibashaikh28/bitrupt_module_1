var nav = document.getElementById("iconsidenav")
var drawer = document.getElementById("sidenav")
var tr = document.getElementsByTagName("tr")

for (let i = 1; i < tr.length; i++) {
    if(i%2 != 0)
    tr[i].style.backgroundColor = "#d1cfe4"
    
}

function onSubmit() {
    var inputs = document.getElementsByTagName("input");
    var textarea = document.getElementsByTagName("textarea");
    var x = document.getElementById("email").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    var y = document.getElementById("fname").value;

    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].value === null || inputs[i].value === ""){
            alert("All fields must be filled out!");
            inputs[i].focus();
            return false;
            break;
        }
    }
    if(textarea[0].value === null || textarea[0].value === ""){
        alert("All fields must be filled out!");
            textarea[0].focus();
            return false;
    }
    if(y[0].toUpperCase() != y[0]){
        alert("First Letter of your name should be capital");
        return false;
    }
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Incorrect Email.\nPlease enter correct email address");
        return false;
    }
    
    
}
 function openDrawer() {
    console.log("functon called");
nav.style.width = "0";
nav.style.border = "none"
drawer.style.width = "200px"
drawer.style.border = "#d1cfe4 solid"
drawer.style.transition = "0.5s"
document.getElementById("rightdiv").style.marginLeft = "220px"
document.getElementById("media").style.width = "500px"
document.getElementById("content").style.width = "520px"


}

function openNav() {
drawer.style.width = "0";
drawer.style.border = "none"
nav.style.width = "80px";
nav.style.border = "#d1cfe4 solid"
nav.style.transition = "0.5s"
document.getElementById("rightdiv").style.marginLeft = "100px"
document.getElementById("media").style.width = "560px"
document.getElementById("content").style.width = "580px"
}

nav.addEventListener("click", openDrawer);
drawer.addEventListener("click", openNav);

function login() {
    var x = document.getElementById("email").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    var pass = document.getElementById("password").value;
    var requiredpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if(!(pass.match(requiredpass)) || atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
        alert("Login Failed\nPlease enter correct email or password")
        return false;
    }
    else{
        return true;
    }
}






