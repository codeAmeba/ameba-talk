const statusClock = document.querySelector('.status-bar__clock');

const getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    statusClock.innerHTML = 
    `${twelveHours < 10 ? `0${hours}` : hours} :
    ${minutes < 10 ? `0${minutes}` : minutes}`;
}

const init = () => {
    getTime();
    setInterval(getTime, 60000);
}

init();