const showClock = () =>{
    let date = new Date();
    let hr = timeFormat(date.getHours());
    let min = timeFormat(date.getMinutes());
    let seg = timeFormat(date.getSeconds()); 
    document.getElementById('hour').innerHTML = `${hr}:${min}:${seg}`;

    const months = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul',
     'Aug', 'Sep', 'Oct', 'Nov'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'];

    let dayWeek = days[date.getDay()];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let dateText = `${dayWeek}, ${day} ${month} ${year}`;
    document.getElementById('date').innerHTML = dateText;

    document.getElementById('container').classList.toggle('animate')
}

const timeFormat = (hour) => {

    if(hour < 10){
        hour = '0' + hour;
    }
    return hour;

}

setInterval(showClock,1000);

