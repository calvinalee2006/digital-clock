function currentTime() {
    var date = new Date();

    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM";
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);

    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("digital_clock").innerText = `${hour} : ${min} : ${sec} ${midday}`
    var t = setTimeout(function () { currentTime() }, 1000)
}

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k
    }
}


currentTime();

function currentDate() {
    var date = new Date();

    var day = days.date.getDay();
    var month = months.date.getMonth()
    var dateOfMonth = date.getDate();
    var year = date.getFullYear()

    document.getElementById('digital_date').innerHTML = `${day}, ${month}, ${dateOfMonth + nth(date)}, ${year}`;
}

const nth = function (d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

currentDate();