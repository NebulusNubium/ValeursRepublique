document.addEventListener('click', function() {
    const audio = new Audio('/sounds/quack.mp3');''
    audio.play().catch(function(error) {
        console.error('Erreur lecture son :', error);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const navLinks = document.getElementById("navLinks");
  
    burger.addEventListener("click", (e) => {
      e.preventDefault();
      navLinks.classList.toggle("active");
    });
  });