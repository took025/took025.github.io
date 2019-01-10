


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
}