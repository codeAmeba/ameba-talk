const statusClock = document.querySelector('.status-bar__clock');

const getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const twelveHours = hours >= 13 ? hours - 12 : hours;

    statusClock.innerHTML = 
    `${twelveHours < 10 ? `0${twelveHours}` : twelveHours} : ${minutes < 10 ? `0${minutes}` : minutes}`;
}

const init = () => {
    getTime();
    setInterval(getTime, 60000);
}

init();