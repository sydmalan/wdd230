// ASYNC AWAIT Fetch 

const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json'

async function getProphets(requestURL){
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok){
        const jsObject = await response.json();
        console.log(jsObject);

        const prophets = jsObject['prophets'];
        // console.log(prophets[0].lastname);

        prophets.forEach(displayProphets);
    }
};

getProphets(requestURL);

function displayProphets(item){
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let birthdate = document.createElement('p');
    let birthplace = document.createElement('p');
    let img = document.createElement('img');

    name.textContent = item.name + ' ' + item.lastname;
    birthdate.textContent = item.birthdate;
    birthplace.textContent = item.birthplace;
    img.setAttribute('src', item.imageurl);
    img.setAttribute('alt', item.name + ' ' + item.lastname);

    card.appendChild(name);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(img);

    document.querySelector('.cards').appendChild(card);    
}


