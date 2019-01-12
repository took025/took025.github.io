


var burgerIcon = document.getElementById("burger");
var burgerMenu = document.getElementById("burger-menu");

burgerIcon.addEventListener("click",  function(){
    console.log("click");
    burgerIcon.classList.toggle("active")
    burgerMenu.classList.toggle("active")
});



let anchorlinks = document.querySelectorAll('a[href^="#"]')

for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
};

function tc(a){
  var x = document.querySelector(a).value;
  return x;
}
function msg(a){
  var x = document.querySelector(".emsg").innerHTML=a;
  return x;
}
function msgb(a){
  var x = document.querySelector(".emsgb").innerHTML=a;
  return x;
}
function size(a){
  var x = document.querySelector(a).value.length;
  return x;
}
// show hide function
//var idhide=document.getElementById("singup");
function singu() {
  var hide=document.querySelector(".form-login");

  if (hide.classList[1]=="hidden") {
    hide.classList.toggle("visible");
  }else {
    hide.classList.toggle("hidden");
  }
  console.log(hide.classList);
  return hide;
}
// Sing up
function singup(){
  if (tc(".fname")==null || tc(".fname")=="") {
    msgb("Please Enter your name");
    return false;
  }
  if (tc(".subject")==null || tc(".subject")=="") {
    msgb("Please Enter your subject");
    return false;
  }
  if (tc(".email")==null || tc(".email")=="") {
    msgb("Please Enter your E-mail");
    return false;
  }
}