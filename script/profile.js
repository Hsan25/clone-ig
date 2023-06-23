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
});



// toggle menu

const btnMenu = document.querySelector(".btn-menu");
const boxMenu = document.querySelector(".modal-menu");
const wrapperMenu = document.querySelector(".wrapper-menu");

btnMenu.addEventListener("click", (e) => {
    e.preventDefault();
    boxMenu.classList.toggle("active");
});



document.addEventListener("click", (e) => {
    if(boxMenu.contains(e.target) && !wrapperMenu.contains(e.target) ){
        boxMenu.classList.remove("active");
    }
})


// show edit profile toggle

const btnShowProfile = document.querySelector(".show-edit-profile");
const boxEditProfile = document.querySelector(".form-edit-profile")
const closeEditProfile = document.querySelector(".close-profile");
const btnSubmitProfile = document.querySelector(".submit-profile");
const x =   document.body.children

function none(){
    for (i = 0 ; i < x.length;i++){
        if(x[i].className == "form-edit-profile active"){
            console.log("lewat");
            continue
        }
        x[i].classList.add("none");
        
    }
}
function remove(){
    for (i = 0 ; i < x.length;i++){
        x[i].classList.remove("none");
    }
}

btnShowProfile.addEventListener("click", function(e) {
    boxEditProfile.classList.add("active");
    none()
    console.log("heloo")
});


closeEditProfile.addEventListener("click", (e) => {
    e.preventDefault()
    boxEditProfile.classList.remove("active");
    remove()
})



// submit data
const btnSumbitProfile = document.querySelector(".submit-profile");
const nameUser = document.querySelector("#nama-user");
const namaPengguna = document.querySelector("#nama-pengguna");
const bioUser = document.querySelector("#bio");
const kataGantiUser = document.querySelector("#kata-ganti");
const jenisKelaminUser = document.querySelector("#jenis-kelamin");
// 

const username = document.querySelector(".username");
const namePengguna = document.querySelector(".name-pengguna");

btnSumbitProfile.addEventListener("click", (e) => {
    username.value = nameUser.value
    namePengguna.value = namaPengguna.value
    console.log(username.value)
    remove()
})