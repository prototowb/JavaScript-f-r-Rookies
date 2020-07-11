

/* DROPDOWN */
// Loop through all dropdown buttons to toggle between hiding and showing its dropdown content
const dropdown = document.getElementsByClassName("dropdown-btn");
const dropIcon = document.getElementById('drop-icon');
let i;

//if clicken on any of the "dropdown-btn", the #drop-icon classes are being toggled,
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


/* BACK TO TOP */ 
// Get the button
var mybutton = document.getElementById("toTop");

//When the user scrolls down 450px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
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



/* ROUTER */ 
