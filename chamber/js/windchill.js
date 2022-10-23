
// with queryselector target t and use text content as a whole variable 
// bring in t and put it into a varible called temp 
// and do the same with wind speed and output as chill 
//once running put everything in an IF clause (don't have an else)

// get the two input values of temperature and wind speed,
// check to make sure they meet the specification limits  (<=50°F and >3.0mph) 
// allowed to officially calculate the wind chill, and
// either calculate and display the wind chill factor value or display "N/A" 
// (not applicable) if the input values did not meet the requirements.

const temp = document.querySelector('#t').textContent;
const windspeed = document.querySelector('#ws').textContent;
// document.querySelector('#wc').textContent = chill;

if (temp < 50 && windspeed > 3){
    let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

    const windchill = document.querySelector('#wc')

    // windchill.textContent = chill;
    windchill.innerHTML = chill + '&#8457;'; 

}   



