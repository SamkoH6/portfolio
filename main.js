const spotlight = document.querySelector(".spotlight");

// Function to update spotlight position
function updateSpotlight(e) {
  // Set the position of the spotlight based on mouse coordinates
  spotlight.style.top = `${e.clientY}px`;
  spotlight.style.left = `${e.clientX}px`;
}

// Add mousemove event listener to the document
document.addEventListener("mousemove", updateSpotlight);

let isScrollingToSection = false; // Flag to indicate when scrolling to a section

function scrollToSection(sectionId) {
  isScrollingToSection = true;
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  setTimeout(() => {
    isScrollingToSection = false;
  }, 1000);
}

document.getElementById("toggleRetro").addEventListener("click", function () {
  document.body.classList.toggle("retro-effect");
});

document.addEventListener("DOMContentLoaded", function () {
  const tagsSlide = document.querySelector(".tags-slide");
  if (!tagsSlide) return; // Exit if .tags-slide doesn't exist

  const originalContent = tagsSlide.innerHTML;
  tagsSlide.innerHTML += originalContent; // Duplicate content for a seamless loop

  let scrollAmount = 0;
  const speed = 0.5; // Adjust scrolling speed as needed

  function slideTags() {
    if (isScrollingToSection) return; // Exit if scrolling to a section
    if (scrollAmount >= tagsSlide.scrollWidth / 2) {
      scrollAmount = 0; // Reset scroll position for an infinite loop
    } else {
      scrollAmount += speed;
    }
    tagsSlide.scrollLeft = scrollAmount;
  }

  setInterval(slideTags, 20); // Adjust interval as needed for smoothness vs performance
});
