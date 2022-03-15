const toggleBtn = document.querySelector(".nav__toggleBtn");
const menu = document.querySelector(".nav__menu");
const social = document.querySelector(".nav__social");

toggleBtn.addEventListener("click", function(){
    menu.classList.toggle("active");
    social.classList.toggle("active");
})