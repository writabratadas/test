let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');
let timeDisplay = document.getElementById('time');

let timer;
let isRunning = false;
let elapsedTime = 0;

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        timer = setInterval(updateTime, 1000);
        isRunning = true;
    }
});

stopBtn.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    elapsedTime = 0;
    timeDisplay.textContent = '00:00:00';
    isRunning = false;
});

function updateTime() {
    elapsedTime++;
    let hours = Math.floor(elapsedTime / 3600);
    let minutes = Math.floor((elapsedTime % 3600) / 60);
    let seconds = elapsedTime % 60;

    timeDisplay.textContent = 
        String(hours).padStart(2, '0') + ':' + 
        String(minutes).padStart(2, '0') + ':' + 
        String(seconds).padStart(2, '0');
}