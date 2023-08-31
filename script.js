// Timer
const timerHours = document.getElementById("timer-hours");
const timerMinutes = document.getElementById("timer-minutes");
const timerSeconds = document.getElementById("timer-seconds");
const startTimerBtn = document.getElementById("start-timer");
const resetTimerBtn = document.getElementById("reset-timer");
const setTimerBtn = document.getElementById("set-timer");
const stopTimerhBtn = document.getElementById("stop-timer");


let timerInterval;
let timerTime = 0;
function updateTimerDisplay() {
    const hours = String(Math.floor(timerTime / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((timerTime % 3600) / 60)).padStart(2, "0");
    const seconds = String(timerTime % 60).padStart(2, "0");
  
    timerHours.textContent = hours;
    timerMinutes.textContent = minutes;
    timerSeconds.textContent = seconds;
  }
  
  startTimerBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerTime = 0;
    updateTimerDisplay();
  
    timerInterval = setInterval(() => {
      timerTime++;
      updateTimerDisplay();
    }, 1000);
  });
  
  resetTimerBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerTime = 0;
    updateTimerDisplay();
  });

  const stopTimerBtn = document.getElementById("stop-timer");
stopTimerBtn.addEventListener("click", () => {
  clearInterval(timerInterval); // Clear the timer interval
});

function setTimer() {
  const timerInput = prompt("Enter the timer value in seconds:");
  timerTime = Number(timerInput);
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timerTime--;
    updateTimerDisplay();

    if (timerTime === 0) {
      clearInterval(timerInterval);
      alert("Timer is finished!");
    }
  }, 1000);
}

setTimerBtn.addEventListener("click", setTimer);

// Stopwatch
const stopwatchHours = document.getElementById("stopwatch-hours");
const stopwatchMinutes = document.getElementById("stopwatch-minutes");
const stopwatchSeconds = document.getElementById("stopwatch-seconds");
const stopwatchMilliseconds = document.getElementById("stopwatch-milliseconds");
const startStopwatchBtn = document.getElementById("start-stopwatch");
const pauseStopwatchBtn = document.getElementById("pause-stopwatch");
const resetStopwatchBtn = document.getElementById("reset-stopwatch");

let stopwatchInterval;
let stopwatchStartTime = 0;
let stopwatchElapsedTime = 0;

function updateStopwatchDisplay() {
  const hours = String(Math.floor(stopwatchElapsedTime / 3600000)).padStart(2, "0");
  const minutes = String(Math.floor((stopwatchElapsedTime % 3600000) / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((stopwatchElapsedTime % 60000) / 1000)).padStart(2, "0");
  const milliseconds = String(stopwatchElapsedTime % 1000).padStart(3, "0");

  stopwatchHours.textContent = hours;
  stopwatchMinutes.textContent = minutes;
  stopwatchSeconds.textContent = seconds;
  stopwatchMilliseconds.textContent = milliseconds;
}

startStopwatchBtn.addEventListener("click", () => {
  clearInterval(stopwatchInterval);

  if (!stopwatchStartTime) {
    stopwatchStartTime = Date.now();
  }

  stopwatchInterval = setInterval(() => {
    stopwatchElapsedTime = Date.now() - stopwatchStartTime;
    updateStopwatchDisplay();
  }, 10);
});

pauseStopwatchBtn.addEventListener("click", () => {
  clearInterval(stopwatchInterval);
  stopwatchStartTime = 0;
});

resetStopwatchBtn.addEventListener("click", () => {
  clearInterval(stopwatchInterval);
  stopwatchStartTime = 0;
  stopwatchElapsedTime = 0;
  updateStopwatchDisplay();
});
