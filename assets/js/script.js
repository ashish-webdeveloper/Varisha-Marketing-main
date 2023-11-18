const slider = document.getElementById('slider');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
let timer;

// Function to move the slider
function moveSlider() {
  if (slider.value < slider.max) {
    slider.value = parseInt(slider.value) + 1;
  } else {
    clearInterval(timer);
  }
}

// Start the timer when the "Start Timer" button is clicked
startButton.addEventListener('click', () => {
  timer = setInterval(moveSlider, 1000); // Change the interval as needed (in milliseconds)
});

// Stop the timer when the "Stop Timer" button is clicked
stopButton.addEventListener('click', () => {
  clearInterval(timer);
});