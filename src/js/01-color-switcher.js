const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
let intervalId = null;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
};
function onStartClick() {
  start.disabled = true;
  stop.disabled = false;
  intervalId = setInterval(bodyColor, 1000);
}
function onStopClick() {
  clearInterval(intervalId);
  start.disabled = false;
  stop.disabled = true;
}
start.addEventListener('click', onStartClick);
stop.addEventListener('click', onStopClick);
