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