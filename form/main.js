const date = new Date();

const month = Number(date.getMonth()) + 1;

const dateTime =
    month + ' / ' +
    date.getDate() + ' / ' +
    date.getFullYear() + ' ' +
    date.getHours() + ' : ' +
    date.getMinutes() + ' : ' +
    date.getSeconds()
;

document.querySelector('#date').value = dateTime;
console.log(dateTime);