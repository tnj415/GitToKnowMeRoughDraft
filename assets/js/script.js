const aboutMeEl = document.querySelector(".about-me");
const containers = document.querySelectorAll('.container')
const nBar = document.querySelector(".n-bar");
const profileEl = document.querySelector(".profile");

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll(".slide-in")

const profileElOptions = {
    rootMargin: "-30px 0px 0px 0px"
};

const profileElObserver = new IntersectionObserver (function(entries, profileElObserver) {
    entries.forEach(entry => {
       if(!entry.isIntersecting) {
           nBar.classList.add("n-scrolled");
       }
       else {
           nBar.classList.remove("n-scrolled");
       }
    })
}, profileElOptions);

profileElObserver.observe(profileEl)

const options = {
    root: null,
    threshold: .3,
    rootMargin: "-300px 0px -150px 0px"
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
    else {
    entry.target.querySelector(".title").classList.toggle('fancy')
    appearOnScroll.unobserve(entry.target);
    }
    });
}, options);

containers.forEach(container => {
    observer.observe(container);
})

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px"
};

constAppearOnScroll = new IntersectionObserver (function(entries, appearOnScroll)
{
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            entry.target.classList.toggle('appear', false);
            return;
        }
        else {
            entry.target.classList.toggle('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions)

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})


//*************************************************************************************
//MODAL
var modal = document.getElementById("contact-modal");

// get the button that opens the modal
var btn = document.getElementById("contact-btn");

var btnNav = document.getElementById("contact-nav"); //For nav bar

// get the <span> element that closes the modal
var modalClose = document.getElementsByClassName("close")[0];

// when the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

btnNav.onclick = function() { //For nav Bar
  modal.style.display ="block";
}

// when the user clicks on <span> (x), close the modal
modalClose.onclick = function() {
  modal.style.display = "none";
}

// when the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}