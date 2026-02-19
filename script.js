* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 300vh; /* controls scroll length */
  background: #000;
  font-family: Arial, sans-serif;
  overflow-x: hidden;
}

.animation-container {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

canvas {
  max-width: 100%;
  max-height: 100%;
}

.spacer {
  height: 50vh;
}
