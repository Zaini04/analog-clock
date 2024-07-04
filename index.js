setInterval(() => {
    d = new Date();
    hour = d.getHours();
    minute = d.getMinutes();
    secs = d.getSeconds();
    // console.log(hour);

    hrotation = (30*hour + (minute/2));
    mrotation = 6*minute;
    srotation = 6*secs;

    // console.log(hrotation);


    // hours.style.transform = 'rotate(${hrotation}deg)';
    // minutes.style.transform = 'rotate(${mrotation}deg)';
    // sec.style.transform = 'rotate(${srotation}deg)';
    hours.style.transform = `rotate(${hrotation}deg)`;
    minutes.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;


        // console.log(hours.style.transform);

}, 1000);