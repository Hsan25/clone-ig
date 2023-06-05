// logo toggle
const logo = document.querySelector(".logo");
const boxLogo = document.querySelector(".logo-click");
logo.addEventListener("click", (e) => {
  e.preventDefault();
  boxLogo.classList.toggle("active");
});

// notif toggle

const notifBtn = document.querySelector(".show-notif");
const boxNotif = document.querySelector(".notif");
const closeNotif = document.querySelector(".close-notif");
// content toggle
const content = document.querySelector(".container");

// nav top toggle
const navTop = document.querySelector(".nav-top");
const sliderStatus = document.querySelector(".slider-status");
notifBtn.addEventListener("click", (e) => {
  e.preventDefault();
  boxNotif.classList.toggle("active");
  setTimeout(() => {
    content.classList.toggle("none");
    navTop.classList.toggle("none");
    sliderStatus.classList.toggle("none");
  }, 150);
});
closeNotif.addEventListener("click", (e) => {
  e.preventDefault();
  boxNotif.classList.remove("active");
  navTop.classList.remove("none");
  content.classList.remove("none");
  sliderStatus.classList.remove("none");
});

// plus toggle

const plus = document.querySelector(".show-plus");
const boxPlus = document.querySelector(".plus-click");
plus.addEventListener("click", (e) => {
  e.preventDefault();
  boxPlus.classList.toggle("active");
});

// boxHmaburger toggle
const hamburger = document.querySelectorAll(".hamburger");
const boxHamburger = document.querySelector(".box-hamburger");
const closeHamburger = document.querySelectorAll(".close-hamburger");




// buat variable untuk menampung nilai identitas element
let x = null

hamburger.forEach((a, i) => {
  // buat identitas setiap element
  a.setAttribute("data-index", i);

  a.addEventListener("click", function (e) {
    e.preventDefault();
    boxHamburger.classList.toggle("active");

    // masukkan identitas element yang kita click  
    x = this.getAttribute("data-index");
  });
});

closeHamburger.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    boxHamburger.classList.remove("active");
  });
});





document.addEventListener("click", (e) => {
  // close boxLogo
  if (!logo.contains(e.target) && !boxLogo.contains(e.target)) {
    boxLogo.classList.remove("active");
    console.log("logo");
  }

  // close boxPlus
  if (!plus.contains(e.target) && !boxPlus.contains(e.target)) {
    boxPlus.classList.remove("active");
  }


  // close boxHamburger
    (function closeH(){
      if(!x){
        return
      }
      if(!hamburger[x].contains(e.target) && boxHamburger.contains(e.target)){
        boxHamburger.classList.remove("active");
      }
    })();



});
