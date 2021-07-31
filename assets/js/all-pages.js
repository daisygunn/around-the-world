function mobileMenu() {
    console.log('clicked')
    let hamburger = document.querySelector(".hamburger");
    let navMenu = document.querySelector(".nav-menu");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  };
  
  const navLink = document.querySelectorAll(".nav-link");
  
  navLink.forEach(n => n.addEventListener("click", closeMenu));
  
  function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
  };