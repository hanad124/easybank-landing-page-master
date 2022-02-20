var humberger_btn = document.querySelector(".humberger_btn");
var nav = document.querySelector(".nav");

humberger_btn.addEventListener("click", () => {
    nav.classList.toggle("nav_show");
    humberger_btn.src = "./images/icon-close.svg"
    // nav.style.display = "block";
})