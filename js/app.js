/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Begin Main Functions
 *
 */

// build the nav
function createNavListItems() {
    for (const section of sections) {
        const navListItem = document.createElement("li");
        navListItem.innerHTML = `<h3 data-nav="${section.id}" id="${section.dataset.nav}" class="navbar__item">${section.dataset.nav}</h3>`;
        navList.appendChild(navListItem);
    }
}

// Add class 'active' to section when near top of viewport

function makeActive() {
    for (const section of sections) {
        const menuElement = document.getElementById(`${section.dataset.nav}`);
        const box = section.getBoundingClientRect();
        section.classList.remove("your-active-class");
        menuElement.classList.remove("active-class");
        if (box.top >= -300 && box.top <= 200) {
            section.classList.add("your-active-class");
            menuElement.classList.add("active-class");
        }
    }
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
document.addEventListener('DOMContentLoaded', createNavListItems);

// Scroll to section on link click
navList.addEventListener('click', event => {
    event.preventDefault();
    document.getElementById(`${event.target.dataset.nav}`).scrollIntoView({behavior: "smooth"});
});


// Set sections as active
window.onscroll = function () {
    makeActive()
};
/**
 * End Events
 *
 */