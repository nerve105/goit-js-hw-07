const registerForm = document.querySelector('.login-form');
registerForm.addEventListener('submit', clickSubmit);

function clickSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = {
    email: form.email.value.trim(),
    password: form.password.value.trim(),
  };

  if (formData.email === '' || formData.password === '') {
    return alert('All form fields must be filled in');
  }
  console.table(formData);
  form.reset();
}