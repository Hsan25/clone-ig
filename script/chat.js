// toggle focus

const message = document.querySelector(".message");
const icons = document.querySelector(".icons");
const btnSend = document.querySelector(".send");
const contentRight = document.querySelector(".right");
message.addEventListener("change", (e) => {
  if (message.value.length != 0) {
    icons.classList.add("none");
    btnSend.classList.add("active");
  } else {
    icons.classList.remove("none");
    btnSend.classList.remove("active");
  }
});

// kirim pesan

btnSend.addEventListener("click", (e) => {
  const x = `<div class="card-pesan right">
    <p>${message.value}</p>
        </div>`;
    contentRight.innerHTML += x;
});
