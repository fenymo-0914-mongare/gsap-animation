const track = document.getElementById("image-track");

// Initialize custom data attributes if they are missing
track.dataset.mouseDownAt = "0";
track.dataset.prevPercentage = "0";
track.dataset.percentage = "0";

// Mouse down: store initial X position
window.onmousedown = e => {
  track.dataset.mouseDownAt = e.clientX.toString();
};

// Mouse up: reset
window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};

// Mouse move: calculate new percentage and animate
window.onmousemove = e => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100;
  let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

  // Clamp to prevent sliding too far
  nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);
  track.dataset.percentage = nextPercentage.toString();

  // Animate track movement
  gsap.to(track, {
    xPercent: nextPercentage,
    yPercent: -50,
    duration: 1.2,
    ease: "power2.out"
  });

  // Animate object position of each image
  const images = track.getElementsByClassName("images");
  for (const image of images) {
    gsap.to(image, {
      objectPosition: `${100 + nextPercentage}% center`,
      duration: 1.2,
      ease: "power2.out"
    });
  }
};
