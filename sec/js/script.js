// // document.getElementById("burger");
// // console.log(document.getElementById("burger"));

// $( document ).ready(function() {
//   // Handler for .ready() called.
//   console.log();
//   $("#burger").on("click", function(){
//   // 	console.log();
//   // 	$("burger").addClass("active");
//   // 	$("burger-menu").addClass("active");
//   $(this).toggleClass("active");
//   $("#burger-menu").toggleClass("active");
//   })
// });
var burgerIcon = document.getElementById("burger");
var burgerMenu = document.getElementById("burger-menu");

burgerIcon.addEventListener("click",  function(){
	console.log("click");
	burgerIcon.classList.toggle("active")
	burgerMenu.classList.toggle("active")
});