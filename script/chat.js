// toggle focus

const message = document.querySelector(".message");
const messageText = message.value;
const icons = document.querySelector(".icons");
const btnSend = document.querySelector(".send");
const contentMain = document.querySelector(".content-main");
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

function startBot(x) {
  return `  <div class="left">
  <div class="card-pesan">
  <p>${x}</p>
  </div>
  </div>`;
}
function startUser(x) {
  return `<div class="right">
  <div class="card-pesan">
  <p>${x}</p>
  </div>
  </div>`;
}

btnSend.addEventListener("click", (e) => {
  contentMain.innerHTML += startUser(message.value);
  window.scrollTo(0, contentMain.scrollHeight);
  setTimeout(() => {
    if(message.value == "hello" || "hi" || "hai"){
      let chatBot = `${message.value} ada yang bisa saya bantu?`
      contentMain.innerHTML +=  startBot(chatBot);
      // startBot(chatBot);
      window.scrollTo(0, contentMain.scrollHeight);
    }
  },1000)
});
