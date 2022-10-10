// const date_now = new Date();
// const full_date = new Intl.DateTimeFormat('en-us', {dateStyle: 'full'}).format(date._now);

//header
const date_now = new Date();

const full_date = new Intl.DateTimeFormat('en-us', {dateStyle: 'full'}).format(date_now);
const current_date_element = document.querySelector("#current-date");
current_date_element.innerHTML = date_now;


function toggleMenu(){
    document.getElementById('primarynav').classList.toggle('open');
    document.getElementById('hambutton').classList.toggle('open');
}

const x = document.getElementById('hambutton')
x.onclick = toggleMenu;


//footer
let date = new Date();
let year = date.getFullYear();

document.querySelector('.year').textContent = year;

//shows the date the site was last modified 
let currentdate = document.lastModified;
document.querySelector('.updated').textContent = currentdate;
