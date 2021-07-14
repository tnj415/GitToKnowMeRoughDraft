const aboutMeEl = document.querySelector(".about-me");
const containers = document.querySelectorAll('.container')

const options = {
    root: null,
    threshold: .20,
    rootMargin: "-250px"
};
 // let callback = (entries, observer) => {
const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
    //     console.log("title search: " + entry.target.querySelector(".title"))
    //  console.log(entry.target.querySelector(".title").classList)
    //  entry.target.querySelector(".title").classList.toggle(".slide")
    if (!entry.isIntersecting) {
        entry.target.querySelector(".title").classList.toggle('fancy', false)
        return;
    }
    entry.target.querySelector(".title").classList.toggle('fancy')
    });
}, options);

containers.forEach(container => {
    observer.observe(container);
})