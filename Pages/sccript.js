
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
  for (let tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for (let tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

// ---------------- JS for Mobile Menu ------------------
var mobileMenu = document.getElementById("mobile-menu");
function openMenu() {
  mobileMenu.style.right = "0px";
}

function closeMenu() {
  mobileMenu.style.right = "-400px";
}
//-----------------darkmode------------------------------------
//----------------let checkbox =  document.getElementById('checkbox');

//----------------checkbox.addEventListener('change', () => {
//----------------  document.body.classList.toggle('dark');
//----------------})//

//-----------------btn--------------------------------------------//
const UPDATE = ({target, x, y }) => {
  const bounds = target.getBoundingClientRect()
  target.style.setProperty('--x', x - bounds.left)
  target.style.setProperty('--y', y - bounds.top)
}

const BTNS = document.querySelectorAll('button')
BTNS.forEach(BTN => BTN.addEventListener('pointermove', UPDATE))
//----------------dynamictxt---------------------------------------------//
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["hard", "fun", "a journey", "LIFE"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});


//-----------------txt-----------------------//
var sliderCounter = 0;
var sliderContent = [
  "Web Development",
  "WordPress Development",
  "App Development",
  "Plugin Development",
  "CRM Integrations"
];
var slider = document.querySelector("#slider");
var sliderValue = document.querySelector("#sliderValue");

function slide() {
  if (sliderCounter >= sliderContent.length) {
    sliderCounter = 0;
  }

  sliderValue.innerHTML = "";
  
  sliderValue.classList.remove("holder-animation");
  void sliderValue.offsetWidth;
  sliderValue.classList.add("holder-animation");
  
  for (i = 0; i < sliderContent[sliderCounter].length; i++) {
    let letterDiv = document.createElement("div");
    letterDiv.innerHTML = sliderContent[sliderCounter][i];

    if (letterDiv.innerHTML == " ") {
      letterDiv.innerHTML = "&nbsp;";
    }
    letterDiv.classList.add("start");
    letterDiv.classList.add("animation");
    letterDiv.style.animationDelay = i / 10 + "s";
    sliderValue.appendChild(letterDiv);
  }

  sliderCounter++;
}

slide();
setInterval(slide, 4000);

  // JavaScript to update the cursor position
  document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

// top button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//cursor is
const letterSpacing = getComputedStyle(
  document.querySelector(":root")
).getPropertyValue("--letter-spacing-x");

var cursor = document.querySelector(".cursor");
var cursorLink = document.querySelector(".link");
var cursorIcon = document.querySelector(".icon");

var iconMap = {
  Home: "fa-house",
  Services: "fa-bell",
  About: "fa-user",
  Contact: "fa-envelope",
  Portfolio: "fa-bag",
  
};

document.addEventListener("mousemove", (event) => {
  cursor.style.left = event.clientX - cursor.offsetWidth / 2 + "px";
  cursor.style.top = event.clientY - cursor.offsetHeight / 2 + "px";

  cursor.classList.remove("active");
  cursorLink.innerHTML = "";
  cursorIcon.innerHTML = "";

  let elements = document.elementsFromPoint(event.clientX, event.clientY);
  elements.forEach((elem) => {
    if (elem.tagName == "A") {
      cursor.classList.add("active");

      elem.innerHTML.split("").forEach((letter, i) => {
        var circleLetter = document.createElement("div");
        circleLetter.classList.add("circle-letter");
        circleLetter.innerHTML = letter;
        circleLetter.style.transform = "rotate(" + i * letterSpacing + "deg)";

        var circleLetterBottom = document.createElement("div");
        circleLetterBottom.classList.add("circle-letter-bottom");
        circleLetterBottom.innerHTML = letter;
        circleLetter.appendChild(circleLetterBottom);

        cursorLink.appendChild(circleLetter);
      });

      if (iconMap[elem.innerHTML]) {
        var circleIcon = document.createElement("i");
        circleIcon.classList.add("fa");
        circleIcon.classList.add(iconMap[elem.innerHTML]);
        cursorIcon.appendChild(circleIcon);
      }
    }
  });
});