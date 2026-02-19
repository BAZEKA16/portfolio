const canvas = document.getElementById("frameCanvas");
const context = canvas.getContext("2d");

const frameCount = 240; // total frames
const images = [];
let currentFrame = 0;

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Generate file path
const getFramePath = (index) => {
  const padded = String(index).padStart(3, "0");
  return `frames/ezgif-frame-${padded}.jpg`;
};

// Preload images
for (let i = 1; i <= frameCount; i++) {
  const img = new Image();
  img.src = getFramePath(i);
  images.push(img);
}

// Draw frame
function drawFrame(index) {
  const img = images[index];
  if (!img.complete) return;

  context.clearRect(0, 0, canvas.width, canvas.height);

  const scale = Math.min(
    canvas.width / img.width,
    canvas.height / img.height
  );

  const x = (canvas.width / 2) - (img.width / 2) * scale;
  const y = (canvas.height / 2) - (img.height / 2) * scale;

  context.drawImage(
    img,
    x,
    y,
    img.width * scale,
    img.height * scale
  );
}

// Scroll animation
function updateAnimation() {
  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScroll;

  currentFrame = Math.min(
    frameCount - 1,
    Math.floor(scrollFraction * frameCount)
  );

  drawFrame(currentFrame);
}

window.addEventListener("scroll", () => {
  requestAnimationFrame(updateAnimation);
});

// Redraw on resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawFrame(currentFrame);
});

// Draw first frame when first image loads
images[0].onload = () => {
  drawFrame(0);
};
