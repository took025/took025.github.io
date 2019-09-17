var burgerIcon = document.getElementById("burger");
var burgerMenu = document.getElementById("burger-menu");

burgerIcon.addEventListener("click",  function(){
	burgerIcon.classList.toggle("active")
	burgerMenu.classList.toggle("active")
});