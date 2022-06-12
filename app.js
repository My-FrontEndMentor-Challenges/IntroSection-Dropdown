"use strict";
const navLinks = document.querySelector(".nav-links-container");
const burgerIcon = document.querySelector(".icon-burger");
const darken = document.querySelector(".darken");

burgerIcon.addEventListener("click", () => {
  if (navLinks.classList.contains("active")) {
    burgerIcon.src = "images/icon-menu.svg";
    navLinks.classList.remove("active");
    darken.classList.remove("active");
  } else {
    burgerIcon.src = "images/icon-close-menu.svg";
    navLinks.classList.add("active");
    darken.classList.add("active");
  }
});
const featuresDropdown = document.querySelector(".features-dropdown");
const featuresLink = document.querySelector(".features-container");
const featuresArrow = document.querySelector(".features-arrow");

featuresLink.addEventListener("click", () => {
  if (featuresDropdown.classList.contains("active")) {
    featuresDropdown.classList.remove("active");
    featuresArrow.src = "/images/icon-arrow-down.svg";
  } else {
    featuresDropdown.classList.add("active");
    featuresArrow.src = "/images/icon-arrow-up.svg";
  }
});

const companyDropdown = document.querySelector(".company-dropdown");
const companyLink = document.querySelector(".company-container");
const companyArrow = document.querySelector(".company-arrow");

companyLink.addEventListener("click", () => {
  console.log("Clicked");
  if (companyDropdown.classList.contains("active")) {
    companyDropdown.classList.remove("active");
    companyArrow.src = "/images/icon-arrow-down.svg";
  } else {
    companyDropdown.classList.add("active");
    companyArrow.src = "/images/icon-arrow-up.svg";
  }
});
