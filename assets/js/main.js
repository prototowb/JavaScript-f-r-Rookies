

/* DROPDOWN */
// Loop through all dropdown buttons to toggle between hiding and showing its dropdown content
const dropdown = document.getElementsByClassName("dropdown-btn");
const dropIcon = document.getElementById('drop-icon');
let i;

//if clicked on any of the "dropdown-btn", the #drop-icon classes are being toggled,
//a 'active' class is added to 'dropdown-btn' and 'display: block / none' is being assigned to 'dropdown-container'.
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener('click', function() {
  dropIcon.classList.toggle('fa-caret-left');
  dropIcon.classList.toggle('fa-caret-down');
  this.classList.toggle('active');
  const dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === 'block') {
  dropdownContent.style.display = 'none';
  } else {
  dropdownContent.style.display = 'block';
  }
  });
}

/* back to top*/
//When the user scrolls down 450px from the top of the document, call these functions and show the button(s)
window.onscroll = function() {scrollFunction(); mobileToc();}

function scrollFunction() {
  // Get the button
  const toTop = document.getElementById("toTop");
  if (window.innerWidth < 768 && document.body.scrollTop > 810 || document.documentElement.scrollTop > 810) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/* Table of Content */
//Get the button
const toc = document.querySelector(".tocToggle");

function mobileToc() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    toc.style.display = "block";
  } else {
    toc.style.display = "none";
  }
}

/* display ToC Container */
//Get the button
const tocToggle = document.getElementsByClassName("tocToggle");
let tocLi;

for (tocLi = 0; tocLi < tocToggle.length; tocLi++) {
  tocToggle[tocLi].addEventListener('click', function() {
  const tocContent = document.getElementById('tocContent');
  if (tocContent.style.display === 'block') {
    tocContent.style.display = 'none';
  } else {
    tocContent.style.display = 'block';
  }
  });
}

//Get the "close-Button" of ToC Content and hide/show the div on click
const modalClose = document.getElementsByClassName("modalClose");
let moC;

for (moC = 0; moC < modalClose.length; moC++) {
modalClose[moC].addEventListener('click', function() {
  const tocContent = document.getElementById('tocContent');
  if (tocContent.style.display === 'block') {
    tocContent.style.display = 'none';
  } else {
    tocContent.style.display = 'block';
  }
  });
}

//Get the list of ToC Content items and hide/show the div on click
const tocClose = document.getElementsByClassName("toc__item");
let tocI;

for (tocI = 0; tocI < tocClose.length; tocI++) {
  tocClose[tocI].addEventListener('click', function() {
  const tocContent = document.getElementById('tocContent');
  if (tocContent.style.display === 'block') {
    tocContent.style.display = 'none';
  } else {
    tocContent.style.display = 'block';
  }
  });
}


/* hamburger toggle */
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

//awaits click on hamburger menu toggle
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

//remove 'nav-open' class from element
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
   })
 })




/* ROUTER */ 
