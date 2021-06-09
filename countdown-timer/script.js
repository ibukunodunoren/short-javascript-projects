const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds') 




const praiseFest = '1 Jun 2021';

function countdown(){
    const praiseFestDate = new Date(praiseFest);
    const currentDate = new Date();

    const totalseconds = (praiseFestDate - currentDate) / 1000;

    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600 %24);
    const minutes = Math.floor(totalseconds/60) %60;
    const seconds = Math.floor(totalseconds)%60;


    daysEl.innerHTML =    formatTime(days);
    hoursEl.innerHTML =    formatTime(hours);
    minutesEl.innerHTML =    formatTime(minutes);
    secondsEl.innerHTML =    formatTime(seconds);
}

//show 0 at front
function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}
//Initial call

countdown();
//every second in milisecond
setInterval(countdown, 1000);

