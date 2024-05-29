const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const lapBtn = document.getElementById('lap-btn');
const timeDisplay = document.getElementById('time-display');

let isRunning = false;
let startTime;
let elapsedTime = 0;
let interval;

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', recordLap);

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        interval = setInterval(updateTimeDisplay, 10);
    }
}

function pauseTimer() {
    isRunning = false;
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    elapsedTime = 0;
    isRunning = false;
    timeDisplay.textContent = '00:00:00';
}

function recordLap() {
    const lapTime = formatTime(elapsedTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    document.getElementById('laps').appendChild(lapItem);
}

function updateTimeDisplay() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    timeDisplay.textContent = formatTime(elapsedTime);
}

function formatTime(milliseconds) {
    const date = new Date(milliseconds);
    return date.toISOString().substr(11, 8);
}
