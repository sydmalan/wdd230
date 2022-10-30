 // querySelector('img') won't get all of the images, it only gets one 
// const image = document.querySelector('img');
// so you need to call ALL of the images
const image = document.querySelectorAll('img');

// this observes something
// const io = new IntersectionObserver (
//     (entries, io) => {
//         entries.forEach(entry => {
//             console.log(entries);
//         })
//     },
//     {   //this determines how much of the image loads before the user sees it (50%)
//         threshold: [.5]
//     }
// );

// image.forEach(image => {
//     io.observe(image);
// })

// What are we observing with the intersection observer?
// io.observe(image);

// you can target specific images using square brackets 
const pimages = document.querySelectorAll('[data-src]');
const options = {
    // this changes the elements percentage 
    threshold: 1,
    // this changes the entire pages bounding box, you don't need root margin 
    rootMargin: '0px 0px 100px 0px'
}

function preloadImage(img){
    const source = img.getAttribute('data-src');
    if (!source) {
        return;
    }
    img.src = source;
}

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else{
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        })
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

// this is how we get it back, you just reference back the key value 
// localStorage.getItem('msg1')


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