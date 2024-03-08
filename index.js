// const navbar = document.querySelector(".navBar");
// let top2 = navbar.offsetTop;
// function stickynavbar() {
//    if (window.scrollY >= top2) {
//       navbar.classList.add("sticky");
//    } else {
//       navbar.classList.remove("sticky");
//    }
// }
// window.addEventListener("scroll", stickynavbar);

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
   myFunction();
};

// Get the navbar
var navbar = document.getElementById("navBar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
   if (window.scrollY >= sticky) {
      navbar.classList.add("sticky");
   } else {
      navbar.classList.remove("sticky");
   }
}
document.querySelector(".hamburger").addEventListener("click", () => {
   hamburger.classList.toggle("active");
   document.querySelector(".navMenu").classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
   n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
   })
);
