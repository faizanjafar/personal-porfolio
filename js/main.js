const navMenu = document.getElementById("nav-menu");
const cancelBtn = document.getElementById("cancel-btn");
const menuBtn = document.getElementById("menu-btn");
const header = document.querySelector("#header");
const scrollBtn = document.querySelector(".scroll-btn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 30) {
        header.classList.add("sticky");
        scrollBtn.classList.add("show");
    }
    else {
        header.classList.remove("sticky");
        scrollBtn.classList.remove("show");
    }
}
// nav hide 
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navMenu.classList.add("show-menu");
    })
}
if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
        navMenu.classList.remove("show-menu");
    })
}





// window.onscroll = function(){
//     if(document.documentElement.scrollTop>100){
//         scrollBtn.classList.add("show");
//     }
//     else{
//         scrollBtn.classList.remove("show");
//     }
// }


function scrollToTop(){
    window.scrollTo(0, 0);
}




let navLinks = document.querySelectorAll("li a");
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        navMenu.classList.remove("show-menu");
    })
}



// Portifolio section
let mixerPortfolio = mixitup(".Portifolio-img", {
    selectors: {
        target: '.image-overlay'
    },
    animation: {
        duration: 300
    }
});

// active portfolio 
const linkwork = document.querySelectorAll(".p-btn");
function activeWork() {
    linkwork.forEach(l=>l.classList.remove("active-btn"))
    this.classList.add("active-btn");
}
linkwork.forEach(l=>l.addEventListener("click", activeWork))



// active nav 

const navLink = document.querySelectorAll(".nav_link");
function activeNav() {
    navLink.forEach(l=>l.classList.remove("active"))
    this.classList.add("active");
}
navLink.forEach(l=>l.addEventListener("click", activeNav));