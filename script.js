const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation-items");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video_slide");
const contents = document.querySelectorAll(".content");


var sliderNav = function(manual){
    
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () =>{
        sliderNav(i);
    });
});