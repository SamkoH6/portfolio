const spotlight = document.querySelector(".spotlight");

// Function to update spotlight position
function updateSpotlight(e) {
  // Set the position of the spotlight based on mouse coordinates
  spotlight.style.top = `${e.clientY}px`;
  spotlight.style.left = `${e.clientX}px`;
}

// Add mousemove event listener to the document
document.addEventListener("mousemove", updateSpotlight);

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
