const inputHrs = document.querySelector(".input_hrs");
const inputMin = document.querySelector(".input_min");
const inputSec = document.querySelector(".input_sec");

let hrs, min, sec;
let timer;

const btnStart = document.querySelector(".btn_start");
const btnPause = document.querySelector(".btn_pause");
const btnReset = document.querySelector(".btn_reset");

function check() {
  if (inputHrs.value != "00" || inputMin.value != "00" || inputSec.value != "00") {
    btnStart.disabled = false;
    btnReset.disabled = false;
  }
}

function startTimer() {
  hrs = inputHrs.value;
  min = inputMin.value;
  sec = inputSec.value;
  timer = setInterval(countTimer, 1000);
  btnStart.style.display = "none";
  btnPause.style.display = "block";
}

function clearTimer(timer) {
  clearInterval(timer);
  inputSec.value = "00";
  inputMin.value = "00";
  inputHrs.value = "00";
  alert("Finish");
  btnStart.style.display = "block";
  btnPause.style.display = "none";
  btnStart.disabled = true;
  btnReset.disabled = true;
}

function resetTimer() {
  clearTimer(timer);
}

function pauseTimer() {
  clearInterval(timer);
  hrs = inputHrs.value;
  min = inputMin.value;
  sec = inputSec.value;
  btnStart.style.display = "block";
  btnPause.style.display = "none";
}

function countTimer() {
  if (sec != 0) {
    sec--;
    if (sec < 10) sec = sec.toString().padStart(2, "0");
    inputSec.value = sec;
  } else {
    if (min != 0) {
      min--;
      if (min < 10) min = min.toString().padStart(2, "0");
      inputMin.value = min;
      sec = 59;
    } else {
      if (hrs != 0) {
        hrs--;
        if (hrs < 10) hrs = hrs.toString().padStart(2, "0");
        inputHrs.value = hrs;
        min = 59;
      } else {
        clearTimer(timer);
      }
    }
  }
}

btnStart.addEventListener("click", startTimer);
btnPause.addEventListener("click", pauseTimer);
btnReset.addEventListener("click", resetTimer);
inputHrs.addEventListener("input", check);
inputMin.addEventListener("input", check);
inputSec.addEventListener("input", check);
