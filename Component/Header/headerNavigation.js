// The following are the element selectors.
const toggleButton = document.querySelector(".header__toggle-container> .header__toggle-button");
const toggleIcon = document.querySelector(".header__toggle-container > .header__toggle-button > .header__toggle-icon");
const menuContainer = document.querySelector('.header > .header__container .header__nav');
const topNav = document.querySelector(".header");

// Make variable in Global Scope to save scroll position of user.
let scrollPosition = 0;

// Start of the Event Listener.
toggleButton.addEventListener('click', () => {

    // Toggle the class lists when clicked.
    menuContainer.classList.toggle("header__nav--open");
    toggleIcon.classList.toggle("toggle-icon--clicked");

    // Check if the navigation bar is expanded.
    if (menuContainer.classList.contains("header__nav--open")) {
        // Remove the scrollbar of the body.
        container.style.overflowY = 'hidden';
        // Make the page un-scrollable but show a scrollbar.
        topNav.style.overflowY = "scroll";
    } else {
        // Remove the scrollbar of the header.
        topNav.style.overflowY = "hidden";
        // Make the page scrollable, also show the old scrollbar.
        document.body.style.overflowY = "scroll";
    }
});