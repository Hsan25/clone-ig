
// logo toggle
const logo = document.querySelector(".logo");
const boxLogo = document.querySelector(".logo-click");
logo.addEventListener("click", (e) => {
    e.preventDefault();
    boxLogo.classList.toggle("active")
    
})

document.addEventListener("click", (e) => {
    if(!logo.contains(e.target) && !boxLogo.contains(e.target)){
        boxLogo.classList.remove("active")

    }
})