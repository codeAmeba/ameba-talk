const statusClock = document.querySelector('.status-bar__clock');

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const twelveHours = hours > 12 ? `PM ${hours - 12}` : `AM ${hours}`;
    statusClock.innerHTML = 
    `${twelveHours < 10 ? `0${twelveHours}` : twelveHours} :
    ${minutes < 10 ? `0${minutes}` : minutes}`;
}

function init() {
    getTime();
    setInterval(getTime, 60000);
}

init();