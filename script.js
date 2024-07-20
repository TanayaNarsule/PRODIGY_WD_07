let hr = 0, min = 0, sec = 0, ms = 0;
let timer;

document.getElementById('start').addEventListener('click', () => {
    clearInterval(timer);
    timer = setInterval(startTimer, 10);
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(timer);
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timer);
    hr = min = sec = ms = 0;
    document.getElementById('hr').innerText = '00';
    document.getElementById('min').innerText = '00';
    document.getElementById('sec').innerText = '00';
    document.getElementById('ms').innerText = '00';
});

function startTimer() {
    ms++;
    if (ms == 100) {
        ms = 0;
        sec++;
    }
    if (sec == 60) {
        sec = 0;
        min++;
    }
    if (min == 60) {
        min = 0;
        hr++;
    }

    document.getElementById('hr').innerText = formatTime(hr);
    document.getElementById('min').innerText = formatTime(min);
    document.getElementById('sec').innerText = formatTime(sec);
    document.getElementById('ms').innerText = formatTime(ms);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
