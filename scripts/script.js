///////////////////////////////////////////////////////////
// Typing animation

let app = document.getElementById('type');

let typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Programmer.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Designer.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Gamer.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Student.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Artist.')
    .pauseFor(2500)
    .start();


///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if(href === "#"){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    } else if (href !== "#" && href.startsWith("#")) { // Scroll to other links
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    } else {
        window.open(href, "_blank");
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");

  });
});