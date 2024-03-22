import './style.css'
import './main.js'

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const menuIcon = navToggle.querySelector("i");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-x");
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    menuIcon.classList.remove("fa-x");
    menuIcon.classList.add("fa-bars");
  }
});


navToggle.addEventListener("click", () => {
  navToggle.classList.add("clicked"); // Add the 'clicked' class to trigger the animation
  setTimeout(() => {
    navToggle.classList.remove("clicked"); // Remove the class after the animation completes
  }, 500); // Adjust the duration to match the animation duration
});




const primaryContact = document.querySelector("primary-contact");
const contactToggle = document.querySelector("mobile-contact-toggle");


window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var textFade = document.getElementById('text-fade');
    
    // Adjust opacity based on scroll position
    textFade.style.opacity = 1 - (scrollPosition / 700); // You can adjust 500 to change the fade distance
  });

  document.addEventListener('DOMContentLoaded', function() {
	// Function to get current time in Florida
	function getCurrentTimeInFlorida() {
	  const options = { timeZone: 'America/New_York', hour: 'numeric', minute: 'numeric' };
	  const floridaTime = new Date().toLocaleString('en-US', options);
	  return floridaTime;
	}
  
	// Update time every minute
	function updateTime() {
	  const timeElement = document.getElementById('mytime');
	  const currentTime = getCurrentTimeInFlorida();
	  timeElement.textContent = ` ${currentTime}`;
	}
  
	// Initial update
	updateTime();
  
	// Update time every minute
	setInterval(updateTime, 60000);
  });



//   const primaryNav = document.querySelector(".primary-navigation");
// const navToggle = document.querySelector(".mobile-nav-toggle");


// navToggle.addEventListener("click", () => {
// 	const visibility = primaryNav.getAttribute("data-visible");

// 	if (visibility === "false"){
// 		primaryNav.setAttribute("data-visible", true);
// 		navToggle.setAttribute("aria-expanded", true);
// 	} else if (visibility === "true") {
// 		primaryNav.setAttribute("data-visible", false);
// 		navToggle.setAttribute("aria-expanded", false);
// 	}
// });
  



