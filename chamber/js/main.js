// const date_now = new Date();
// const full_date = new Intl.DateTimeFormat('en-us', {dateStyle: 'full'}).format(date._now);


//Date
const date_now = new Date();
let day = date_now.getDay();
// console.log(day);

let message1;

if (day >= 1 && day <= 2){
    message1 = 'Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
};

document.querySelector("#message1").textContent = message1;

//Come join us for the chamber meet and greet Wednesday at 7:00 p.m.

//header


// const full_date = new Intl.DateTimeFormat('en-us', {dateStyle: 'full'}).format(date_now);
// const current_date_element = document.querySelector("#current-date");
// current_date_element.innerHTML = date_now;


let w_names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let m_names = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let mydate = new Date();
console.log(mydate);

let weekname = w_names[mydate.getDay()];
console.log(mydate.getDay());
let monthname = m_names[mydate.getMonth()];

const dateoutput = document.querySelector('#current-date');

dateoutput.textContent = weekname + ", " + mydate.getDate() + " " + monthname + " " + mydate.getFullYear();




// function toggleMenu(){
//     document.getElementById('primarynav').classList.toggle('open');
//     document.getElementById('hambutton').classList.toggle('open');
// }

// const x = document.getElementById('hambutton')
// x.onclick = toggleMenu;

const hamburgerBtn = document.querySelector('.ham');
const navigation = document.querySelector('.navigation')

function toggleMenu() {
    navigation.classList.toggle('responsive');
    hamburgerBtn.classList.toggle('responsive');
}

hamburgerBtn.addEventListener('click', toggleMenu, false);


//footer
let date = new Date();
let year = date.getFullYear();

document.querySelector('.year').textContent = year;

//shows the date the site was last modified 
let currentdate = document.lastModified;
document.querySelector('.updated').textContent = currentdate;
