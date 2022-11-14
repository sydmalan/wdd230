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



// BUSINESS CARDS
const requestURL = 'https://sydmalan.github.io/wdd230/chamber/data.json';

// async function getBusiness(requestURL){
//     const response = await fetch(requestURL);
//     console.log(response);
//     if (response.ok){
//         const jsObject = await response.json();
//         console.log(jsObject);

//         const business = jsObject['data'];
//         console.log(prophets[0].lastname);

//         business.forEach(displayBusiness);

//         business.forEach(business => {
//             displayBusiness(business);
//             loadTableBusinesses(business);
//         });
//     }
// };

// getBusiness(requestURL);

// function displayBusiness(item){
//     let card = document.createElement('section');
//     let img = document.createElement('img');
//     let name = document.createElement('h2');
//     let address = document.createElement('p');
//     let phone = document.createElement('p');
//     let website = document.createElement('p');

//     img.setAttribute('src', item.imageurl);
//     img.setAttribute('alt', item.name);
//     name.textContent = item.name;
//     address.textContent = item.address;
//     phone.textContent = item.phone;
//     website.textContent = item.website;

//     card.appendChild(img);
//     card.appendChild(name);
//     card.appendChild(address);
//     card.appendChild(phone);
//     card.appendChild(website);

//     document.querySelector('.cards').appendChild(card);
// }

function showCards(){
    let row = document.querySelectorAll('tr');
    row.forEach((item) => {
        item.remove();
    });

    let section = document.querySelectorAll('section');
        section.forEach((item) => {
        item.remove();
    });

    fetch(requestURL)
    .then((response)=> {
        if(response.ok){
            return response.json();
        } else {
            alert('Data not Available');
        }
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  
        const business = jsonObject['businesses'];
        business.forEach(displayBusinessCards);
    });

    function displayBusinessCards(business) {  
        let cards = document.querySelector('.cards');
        cards.setAttribute('style', 'grid-template-columns: 2fr 1fr 1fr 1fr;');

        let card = document.createElement('section') 
        let address = document.createElement('p');
        address.textContent = `Address: ${business.address}`
        let phone  = document.createElement('p');
        phone.textContent = `Phone: ${business.phone}`;
        let website  = document.createElement('p');
        website.textContent = `Website: ${business.website}`;
        let img = document.createElement('img');
        let image_path = `directory_images/${business.image}`
        img.setAttribute('src', image_path);
        img.setAttribute('alt', `${business.name} logo`);
        
        card.appendChild(img); 
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        
        document.querySelector('div.cards').appendChild(card);
        
    }
    
}


function showList(){
    let section = document.querySelectorAll('section');
        section.forEach((item) => {
            item.remove();
    });
    
    let row = document.querySelectorAll('tr');
        row.forEach((item) => {
        item.remove();
    });
    fetch(requestURL)
    .then((response)=> {
        if(response.ok){
            return response.json();
        } else {
            alert('Data not Available');
        }
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  
        const business = jsonObject['businesses'];
        business.forEach(displayBusinessList);
    });

    function displayBusinessList(business) { 

        let list_row = document.createElement('tr');
        let td_name = document.createElement('td');
        td_name.textContent = `${business.name}`;

        let td_address = document.createElement('td');
        td_address.textContent = `${business.address}`;

        let td_number = document.createElement('td');
        td_number.textContent = `${business.phone}`;

        let td_web = document.createElement('td');
        let web_p = document.createElement('a')
        web_p.setAttribute('href', business.website);
        web_p.textContent = `${business.website}`;

        td_web.appendChild(web_p)
        list_row.appendChild(td_name)
        list_row.appendChild(td_address)
        list_row.appendChild(td_number)
        list_row.appendChild(td_web)
        document.querySelector('table').appendChild(list_row);

     }
}

showCards();

let cards = document.querySelector('#cards');
cards.addEventListener('click', showCards);

let list = document.querySelector('#list');
list.addEventListener('click', showList);


function reportWindowSize() {
  if (window.innerWidth > 900 && window.innerWidth < 1100) {
      showList();
  } else {
      showCards();
  }
  console.log(window.innerWidth);
}

window.addEventListener('resize', reportWindowSize);
window.addEventListener('load', reportWindowSize);










//footer
let date = new Date();
let year = date.getFullYear();

document.querySelector('.year').textContent = year;

//shows the date the site was last modified 
let currentdate = document.lastModified;
document.querySelector('.updated').textContent = currentdate;




