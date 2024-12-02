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
  //-----------------btn--------------------------------------------//
const UPDATE = ({target, x, y }) => {
  const bounds = target.getBoundingClientRect()
  target.style.setProperty('--x', x - bounds.left)
  target.style.setProperty('--y', y - bounds.top)
}

const BTNS = document.querySelectorAll('button')
BTNS.forEach(BTN => BTN.addEventListener('pointermove', UPDATE))

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
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// menu
  

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