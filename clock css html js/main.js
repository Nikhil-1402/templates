

const hour_text = document.getElementById('hour');
const min_text = document.getElementById('min');
const sec_text = document.getElementById('sec');
const am_text = document.getElementById('ampm');


const clock = () => {
    let date = new Date();
    let hr = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    let ampm;

    if(hr > 12 && min > 0){
        hr -=12;
        ampm = `PM`
    }
    else{
        ampm = `AM `
    }


    hour_text.innerHTML = `${hr}:`
    min_text.innerHTML = `${min}:`
    sec_text.innerHTML = `${sec}`
    am_text.innerHTML = `${ampm}`

}

setInterval(clock, 1000);