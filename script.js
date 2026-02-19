const frameCount = 240;
const canvas = document.getElementById("scrollCanvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const currentFrame = (index) =>
  `frames/ezgif-frame-${String(index).padStart(3, '0')}.jpg`;

const images = [];
const img = new Image();
img.src = currentFrame(1);
canvas.width = 1920;
canvas.height = 1080;
img.onload = function () {
  context.drawImage(img, 0, 0);
};

for (let i = 1; i <= frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.floor((scrollTop / maxScroll) * frameCount)
  );

  requestAnimationFrame(() => {
    context.drawImage(images[frameIndex], 0, 0);
  });
});
