// toggle focus

const wrapper = document.querySelectorAll(".wrapper-input");
const inpt = document.querySelectorAll(".user-info");
const password = document.querySelector(".user-password");
const place = document.querySelectorAll(".wrapper-input span");

wrapper.forEach((a, i) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    inpt[i].focus();
    a.classList.toggle("border");
  });
});

inpt[0].addEventListener("change", function (e) {
  if (this.value.length != 0) {
    place[0].classList.add("top");
  }
  if (this.value.length == 0) {
    place[0].classList.remove("top");
  }
});

password.addEventListener("change", function (e) {
  if (this.value.length != 0) {
    place[1].classList.add("top");
  }
  if (this.value.length == 0) {
    place[1].classList.remove("top");
  }
});

document.addEventListener("click", (e) => {
  if (!wrapper[0].contains(e.target)) {
    wrapper[0].classList.remove("border");
  }

  if (!wrapper[1].contains(e.target)) {
    wrapper[1].classList.remove("border");
  }
});


// toggle box login

const showBox = document.querySelector(".show-box-login");
const boxLogin = document.querySelector(".box-login");
// const wrapperLogin = document.querySelector()
const x = boxLogin.children[0]//.wrapper
showBox.addEventListener("click", (e) => {
    e.preventDefault();
    boxLogin.classList.add("active");

});

document.addEventListener("click", (e) => {
    if(!showBox.contains(e.target) && !x.contains(e.target)){
        boxLogin.classList.remove("active");
    }
})
