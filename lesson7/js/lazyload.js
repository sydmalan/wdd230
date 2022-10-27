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
    threshold: 1,
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