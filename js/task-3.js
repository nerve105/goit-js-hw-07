const textInput = document.querySelector('#name-input');
const textoutput = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  event.currentTarget.value.trim() === ''
    ? (textoutput.textContent = 'Anonymous')
    : (textoutput.textContent = event.currentTarget.value.trim());
});