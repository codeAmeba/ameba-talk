const statusClock = document.querySelector('.status-bar__clock');

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const twelveHours = hours > 12 ? hours - 12 : hours;
    statusClock.innerHTML = 
    `${twelveHours < 10 ? `0${twelveHours}` : twelveHours} :
    ${minutes < 10 ? `0${minutes}` : minutes}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();