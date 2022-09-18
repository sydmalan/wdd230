//you call ID and Classes the same way as CSS with # and .

//shows the year for the copyright 
let date = new Date();
let year = date.getFullYear();

document.querySelector('.year').textContent = year;

//shows the date the site was last modified 
let currentdate = document.lastModified;
document.querySelector('.updated').textContent = currentdate;