// toggle post and tags

const btnPost = document.querySelector(".show-post");
const boxPost = document.querySelector(".box-post");
const btnTags = document.querySelector(".show-tags");
const boxTags = document.querySelector(".box-tags");

btnPost.addEventListener("click", (e) => {
    e.preventDefault();
    boxPost.classList.remove("none");
    boxTags.classList.remove("active");
    btnPost.classList.add("border");
    btnTags.classList.remove("border");
})
btnTags.addEventListener("click", (e) => {
    e.preventDefault();
    boxTags.classList.add("active");
    boxPost.classList.add("none");
    btnPost.classList.remove("border");
    btnTags.classList.add("border");
})