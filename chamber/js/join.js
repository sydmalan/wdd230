// Form Hidden Date
const form_date = new Date();

const month = Number(date.getMonth()) + 1;

const dateTime =
    month + ' / ' +
    form_date.getDate() + ' / ' +
    form_date.getFullYear() + ' ' +
    form_date.getHours() + ' : ' +
    form_date.getMinutes() + ' : ' +
    form_date.getSeconds()
;

document.querySelector('#date').value = dateTime;
console.log(dateTime);