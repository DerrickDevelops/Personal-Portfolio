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
    menuIcon.classList.add("fa-arrow-right");
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    menuIcon.classList.remove("fa-arrow-right");
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

document.getElementById("year").innerHTML = new Date().getFullYear();


// GSAP Animation for Header


document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({ defaults: { duration: 0.7, ease: "power2.out" } });

  // "V2 Coming Soon" fades in first
  tl.from(".updated-portfolio", { opacity: 0, y: -20 });

  // "Hi, I'm Derrick" slides in from the left
  tl.from(".header h2", { opacity: 0, x: -50 }, "-=0.5");

  // "Creative Designer / Developer" staggers each word for a smooth reveal
  tl.from(".header h1", { opacity: 0, y: 20 }, "-=0.3")
    .from(".span-1", { width: 0, duration: 1 }, "-=0.8")
    .from(".span-2", { width: 0, duration: 1 }, "-=0.8");

  // "&" fades in subtly
  tl.from(".and", { opacity: 0, scale: 0.8 });

  // Planet elements scale in with a slight float effect
  tl.from(".planet-container", { opacity: 0, scale: 0.5, duration: 1.5, ease: "elastic.out(1, 0.6)" }, "-=0.5")
    .from(".sphere", { opacity: 0, y: -30, duration: 1 }, "-=1")
    .from(".planet", { opacity: 0, y: 10, stagger: 0.2, duration: 0.8 });

});





