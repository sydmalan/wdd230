// SEQUENCE 

let date = new Date();

console.log(date);

let year = date.getFullYear();

console.log(year);

// finds the h1 in my html and changes the text content to display the year 
document.querySelector('h1').textContent = year;

// shows the last time the html file was saved 
let currentdate = document.lastModified;

// console.log just lets you view it in your console when inspecting, no one else sees it 
console.log(currentdate);

document.querySelector('div').textContent = currentdate;