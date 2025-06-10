let date = document.getElementById("date");
let time = document.getElementById("time");

function setTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let year = now.getFullYear();
  let ampm = hours >= 12 ? "PM" : "AM";
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  let currentTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
  let currentDay = day + "/" + month + "/" + year;
  date.innerHTML = currentDay;
  time.innerHTML = currentTime;
}

setInterval(setTime);
setTime();
