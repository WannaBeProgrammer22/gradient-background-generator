const css = document.querySelector('h3');
const colorOne = document.querySelector('#color1');
const colorTwo = document.querySelector('#color2');
const body = document.getElementById('gradient')


function setGradient() {
  body.style.background = `linear-gradient(to right, ${colorOne.value}, ${color2.value})`;

  css.textContent = body.style.background + ';';
}

colorOne.addEventListener('input', setGradient);

colorTwo.addEventListener('input', setGradient);