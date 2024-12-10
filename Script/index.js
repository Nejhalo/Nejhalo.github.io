
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
let textArrayhome = 0;
let charhome = 0;

function type() {
  if (charhome < textArray[textArrayhome].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayhome].charAt(charhome);
    charhome++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charhome > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayhome].substring(0, charhome-1);
    charhome--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayhome++;
    if(textArrayhome>=textArray.length) textArrayhome=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});


//-----------------txt-----------------------//
var ProposalCounter = 0;
var ProposalContent = [
  "Web Proposalment",
  "3D Proposalment",
  "App Proposalment",
  "Plugin Proposalment",
  "CRM Integrations"
];
var Proposal = document.querySelector("#Proposal");
var ProposalValue = document.querySelector("#ProposalValue");

function slide() {
  if (ProposalCounter >= ProposalContent.length) {
    ProposalCounter = 0;
  }

  ProposalValue.innerHTML = "";
  
  ProposalValue.classList.remove("holder-animation");
  void ProposalValue.offsetWidth;
  ProposalValue.classList.add("holder-animation");
  
  for (i = 0; i < ProposalContent[ProposalCounter].length; i++) {
    let letterDiv = document.createElement("div");
    letterDiv.innerHTML = ProposalContent[ProposalCounter][i];

    if (letterDiv.innerHTML == " ") {
      letterDiv.innerHTML = "&nbsp;";
    }
    letterDiv.classList.add("start");
    letterDiv.classList.add("animation");
    letterDiv.style.animationDelay = i / 10 + "s";
    ProposalValue.appendChild(letterDiv);
  }

  ProposalCounter++;
}

slide();
setInterval(slide, 4000);

  // UI to update the cursor position
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

