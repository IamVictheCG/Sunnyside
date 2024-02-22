let hamburger =  document.querySelector(".hamburger")
let social_links =  document.querySelector(".social_links") //SVGs
let navs =  document.querySelector(".navs")

let mobile = window.innerWidth



window.addEventListener("resize", function() {
    let viewportWidth = window.innerWidth;

    // Adjust the condition based on your requirements
    if (viewportWidth <= 489) {
        navs.style.display = "none";
    }
});

hamburger.addEventListener("click", function() {
    display = (display === "none") ? "flex": "none";

    navs.style.display = display;
})

