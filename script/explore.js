// toggle box search

const labelSearch = document.querySelector(".label-search");
const search = document.querySelector("#search");
const closeSearch = document.querySelector(".close-search");
const boxSearch = document.querySelector(".box-search");


// toggle box result search

const boxResultSearch = document.querySelector(".search-result");

// content toggle
const content = document.querySelector(".container");
search.addEventListener("click", (e) => {
  e.preventDefault();
  closeSearch.classList.add("active");
  boxResultSearch.classList.add("active")
  content.classList.add("none");
  boxSearch.classList.add("sticky");
   
})
closeSearch.addEventListener("click", (e) => {
  e.preventDefault();
  closeSearch.classList.remove("active")
  boxResultSearch.classList.remove("active")
  content.classList.remove("none");
  boxSearch.classList.remove("sticky");
});

