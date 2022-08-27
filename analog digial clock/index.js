let hr = document.getElementById('hh'),
    min = document.getElementById('min'),
    sec = document.getElementById('sec'),
    day = document.getElementById('day'),
    date = document.getElementById('dd'),
    mon = document.getElementById('mm'),
    yr = document.getElementById('yr'),
    hour = document.getElementById('hour'),
    minute = document.getElementById('mins'),
    second = document.getElementById('secon');

const digital = () => {
    let d = new Date();
    let h = d.getHours(),
        minu = d.getMinutes(),
        seco = d.getSeconds(),
        da = d.getDay();

    hour.style.transform = `rotateZ(${(h*30) + ((minu*6)/12)}deg)`;
    minute.style.transform = `rotateZ(${minu*6}deg)`;
    second.style.transform = `rotateZ(${seco*6}deg)`;

    let arr = [`Sun`, `Mon`, `Tues`, `Wed`, `Thu`, `Fri`, `Sat`];
    // console.log(arr[da]);
    day.innerHTML = `${arr[da]}`;
    if (h <= 12) {
        if (h < 10) {
            hr.innerHTML = `0${h}`;
        } else {
            hr.innerHTML = `${h}`;
        }
        document.getElementById('merid').innerHTML = `AM`;
    } else {
        h -= 12;
        if (h < 10) {
            hr.innerHTML = `0${h}`;
        } else {
            hr.innerHTML = `${h}`;
        }
        document.getElementById('merid').innerHTML = `PM`;
    }
    if (minu < 10) {
        min.innerHTML = `0${minu}`;
    } else {
        min.innerHTML = `${minu}`;
    }
    if (seco < 10) {
        sec.innerHTML = `0${seco}`;
    } else {
        sec.innerHTML = `${seco}`;
    }
    let dd = d.getDate(),
        mm = d.getMonth(),
        year = d.getFullYear();

    date.innerHTML = `${dd}`;
    let arry = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`];
    mon.innerHTML = `${arry[mm]}`;
    yr.innerHTML = `${year}`;
}

// digital();
setInterval(digital, 1000);

let toggle = () => {
    let mode = document.getElementById('mode');
    let body = document.getElementById('body');
    mode.classList.toggle('active');
    body.classList.toggle('active');
}