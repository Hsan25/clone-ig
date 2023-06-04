
// logo toggle
const logo = document.querySelector(".logo");
const boxLogo = document.querySelector(".logo-click");
logo.addEventListener("click", (e) => {
    e.preventDefault();
    boxLogo.classList.toggle("active")
    
})

// notif toggle

const notifBtn = document.querySelector(".show-notif");
const boxNotif = document.querySelector(".notif");
const closeNotif = document.querySelector(".close-notif")
// content toggle 
const content = document.querySelector(".container");

// nav top toggle
const navTop = document.querySelector(".nav-top")
const sliderStatus = document.querySelector(".slider-status")
notifBtn.addEventListener("click", (e) => {
    e.preventDefault();
    boxNotif.classList.toggle("active");
    content.classList.toggle("none");
    navTop.classList.toggle("none");
    sliderStatus.classList.toggle("none");

})
closeNotif.addEventListener("click", (e) => {
    e.preventDefault();
    boxNotif.classList.remove("active");
    navTop.classList.remove("none");
    content.classList.remove("none");
    sliderStatus.classList.remove("none");
})











document.addEventListener("click", (e) => {
    if(!logo.contains(e.target) && !boxLogo.contains(e.target)){
        boxLogo.classList.remove("active")

    }
})

