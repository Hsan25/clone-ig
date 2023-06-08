// toggle box search

const labelSearch = document.querySelector(".label-search");
const search = document.querySelector("#search");
const searchX = document.querySelector("#search-2");
const closeSearch = document.querySelector(".close-search");
const boxSearch = document.querySelector(".box-search");


// toggle box result search

const boxResultSearch = document.querySelector(".search-result");

// content toggle
const content = document.querySelector(".box-inbox");
search.addEventListener("click", (e) => {
  e.preventDefault();
  closeSearch.classList.add("active");
  boxResultSearch.classList.add("active")
  content.classList.add("none");
  searchX.focus()
})
closeSearch.addEventListener("click", (e) => {
  e.preventDefault();
  closeSearch.classList.remove("active")
  boxResultSearch.classList.remove("active")
  content.classList.remove("none");
});


// toggle box info akun
const btnShowInfo = document.querySelector(".show-info-akun");
const boxInfo = document.querySelector(".box-akun");
btnShowInfo.addEventListener("click", function(e){
    e.preventDefault();
    boxInfo.classList.toggle("active");
});


document.addEventListener("click", (e) => {
    if(!btnShowInfo.contains(e.target) && boxInfo.contains(e.target)){
        boxInfo.classList.remove("active");
    }
})
