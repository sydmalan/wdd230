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



// LAZY LOAD and DAYS VISITED

const pimages = document.querySelectorAll('[data-src]');
const options = {
    // this changes the elements percentage 
    threshold: 1
    // this changes the entire pages bounding box, you don't need root margin 
};

function preloadImage(img){
    const source = img.getAttribute('data-src');
    if (!source) {
        return;
    }
    img.src = source;
};

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else{
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        });
    },
      //this determines how much of the image loads before the user sees it (50%)
        // threshold: [.5]
        options
);

pimages.forEach(image => {
    io.observe(image);
})




// localStorage
// this is the ('key', 'value))
// localStorage.setItem('msg1', 'Hello Permanent');
// sessionStorage.setItem('msg2', 'Hi Temporary');
localStorage.setItem('visitDate', Date.now());
let visitDate = localStorage.getItem('visitDate');

// Days since last visit
if (!localStorage.getItem('lastvisit')){
    localStorage.setItem('lastvisit', Date.now());
    document.getElementById('diff').textContent = 'This is your 1st visit';
}else{
    let prevDate = localStorage.getItem('lastvisit');
    let currDate = Date.now();

    let difference = currDate - prevDate
    console.log(difference);
    let daysDifference = Math.floor(difference/1000/60/60/24);

    document.getElementById('diff').textContent = daysDifference;
    localStorage.setItem('lastvisit', Date.now());
}




// form
// const form_date = new Date();

// const month = Number(date.getMonth()) + 1;

// const dateTime =
//     month + ' / ' +
//     form_date.getDate() + ' / ' +
//     form_date.getFullYear() + ' ' +
//     form_date.getHours() + ' : ' +
//     form_date.getMinutes() + ' : ' +
//     form_date.getSeconds()
// ;

// document.querySelector('#date').value = dateTime;
// console.log(dateTime);