document.getElementById('submitButton').addEventListener('click', function() {
  const inputs = document.querySelectorAll('#form input');
  let allFilled = true;

  inputs.forEach(input => {
    if (input.value.trim() === '') {
      input.classList.add('form__error');
      allFilled = false;
    } else {
      input.classList.remove('form__error');
    }
  });
});