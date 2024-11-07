// The following are the element selectors.
const toggleButton = document.querySelector(".header__toggle-container> .header__toggle-button");
const menuContainer = document.querySelector('.header > .container .header__nav');
const topNav = document.querySelector(".header");
const container = document.querySelector(".header > .container");

// Make variable in Global Scope to save scroll position of user.
let scrollPosition = 0;

// Start of the Event Listener.
toggleButton.addEventListener('click', () => {

	// Toggle the class lists when click is done.
	menuContainer.classList.toggle("header__nav--open");
	toggleButton.classList.toggle("header__toggle-button--clicked");
	toggleButton.classList.toggle("button--plain--active");
    console.log("Toggle Button Clicked");
    

	// Check if the navigation bar is expanded.
	if (menuContainer.classList.contains("header__nav--open")) {
		// Remove the scrollbar of the body.
		container.style.overflowY = 'hidden';
		// Make the page unscrollable, but show a scrollbar.
		topNav.style.overflowY = "hidden";
		document.body.style.overflowY = "scroll";
	} else {
		// Remove the scrollbar of the header.
		topNav.style.overflowY = "hidden";
		// Make the page scrollable, also show the old scrollbar.
		document.body.style.overflowY = "scroll";
	}
});