// Hamburger menu toggle
const menu = document.querySelector("#menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("nav-toggle");
});

// Close menu when clicking on a link (for mobile)
const navLinks = document.querySelectorAll(".navbar ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("nav-toggle");
  });
});

// Update active navbar link based on scroll position
window.addEventListener("scroll", () => {
  // Remove active class on scroll for mobile menu
  menu.classList.remove("fa-times");
  navbar.classList.remove("nav-toggle");

  // Get all sections
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100; // Offset for navbar height
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(
      `.navbar ul li a[href="#${sectionId}"]`,
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // Remove active class from all links
      navLinks.forEach((link) => link.classList.remove("active"));
      // Add active class to current section's link
      if (navLink) {
        navLink.classList.add("active");
      }
    }
  });

  // Handle the case when at the very top of the page
  if (scrollY < 100) {
    navLinks.forEach((link) => link.classList.remove("active"));
    const homeLink = document.querySelector('.navbar ul li a[href="#home"]');
    if (homeLink) {
      homeLink.classList.add("active");
    }
  }
});

// Smooth scroll for anchor links (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Ignore if it's just "#" or empty
    if (href === "#" || !href) return;

    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
