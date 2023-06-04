
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
    setTimeout(() =>{
        content.classList.toggle("none");
        navTop.classList.toggle("none");
        sliderStatus.classList.toggle("none");

    },150)

})
closeNotif.addEventListener("click", (e) => {
    e.preventDefault();
    boxNotif.classList.remove("active");
    navTop.classList.remove("none");
    content.classList.remove("none");
    sliderStatus.classList.remove("none");
})

// plus toggle

const plus = document.querySelector(".show-plus");
const boxPlus = document.querySelector(".plus-click");
plus.addEventListener("click", (e) => {
    e.preventDefault();
    boxPlus.classList.toggle("active");
})

// boxHmaburger toggle
const hamburger = document.querySelectorAll(".hamburger");
const boxHamburger = document.querySelector(".box-hamburger");
const closeHamburger = document.querySelectorAll(".close-hamburger");
hamburger.forEach((a) => {
    a.addEventListener("click", (e) => {
        e.preventDefault();
        boxHamburger.classList.toggle("active");
    })
})
closeHamburger.forEach((a) => {
    a.addEventListener("click", (e) => {
        e.preventDefault();
        boxHamburger.classList.remove("active");
    })
})

// hamburger.forEach((a) => {
//     document.onclick = (e)=>{
//         if(!a.contains(e.target) && !boxHamburger.contains(e.target)){
//             boxHamburger.classList.remove("active");
//             console.log(e.target)
//         }
//     }
// });







document.addEventListener("click", (e) => {
    if(!logo.contains(e.target) && !boxLogo.contains(e.target)){
        boxLogo.classList.remove("active")
    }


    if(!plus.contains(e.target) && !boxPlus.contains(e.target)){
        boxPlus.classList.remove("active")
    }

   
    
    
})

