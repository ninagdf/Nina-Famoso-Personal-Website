
// For Hiding // Re-appearing of navigation
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      // Calculate the scroll position by subtracting 20px from the offsetTop of the target element
      const offset = targetElement.offsetTop - 80;
  
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    });
  });

  document.getElementById('scrollButton').addEventListener('click', function() {
    const contact = document.getElementById('contact');
  
    // Scroll to the section with a smooth animation
    contact.scrollIntoView({ behavior: 'smooth' });
  });
  

  document.getElementById('scrollButton2').addEventListener('click', function() {
    const about = document.getElementById('about');
  
    // Scroll to the section with a smooth animation
    about.scrollIntoView({ behavior: 'smooth' });
  });
