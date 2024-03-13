import './style.css'
import './main.js'

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
	const visibility = primaryNav.getAttribute("data-visible");

	if (visibility === "false"){
		primaryNav.setAttribute("data-visible", true);
		navToggle.setAttribute("aria-expanded", true);
	} else if (visibility === "true") {
		primaryNav.setAttribute("data-visible", false);
		navToggle.setAttribute("aria-expanded", false);
	}
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
  



