// document.getElementById("burger");
// console.log(document.getElementById("burger"));

$( document ).ready(function() {
  // Handler for .ready() called.
  console.log();
  $("#burger").on("click", function(){
  // 	console.log();
  // 	$("burger").addClass("active");
  // 	$("burger-menu").addClass("active");
  $(this).toggleClass("active");
  $("#burger-menu").toggleClass("active");
  })
});