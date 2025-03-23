const circle = document.querySelector('.fg-ring');
const input = document.getElementById('value');
const animate = document.getElementById('animate');
const hide = document.getElementById('hide');

const radius = 90;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;

function setProgress(value) {
  const val = Math.max(0, Math.min(100, value));
  const offset = circumference - (val / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

input.addEventListener('input', () => {
  const value = parseInt(input.value) || 0;
  if (animate.checked) {
    circle.style.transition = 'stroke-dashoffset 0.5s ease';
  } else {
    circle.style.transition = 'none';
  }
  setProgress(value);
});

animate.addEventListener('change', () => {
  circle.style.transition = animate.checked ? 'stroke-dashoffset 0.5s ease' : 'none';
});

hide.addEventListener('change', () => {
  circle.style.opacity = hide.checked ? 0 : 1;
});

setProgress(input.value);
