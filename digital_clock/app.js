const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const ampm = document.querySelector(".ampm");

function formatTime(time) {
  return time.toString().padStart(2, "0");
}

function updateTime() {
  let date = new Date();
  let ampmText = date.getHours() >= 12 ? "PM" : "AM";
  hour.textContent = formatTime(date.getHours());
  second.textContent = formatTime(date.getSeconds());
  minute.textContent = formatTime(date.getMinutes());
  ampm.textContent = ampmText;
}

setInterval(() => {
  updateTime();
}, 1000);
