// -------- Імпорт лодеш
import throttle from 'lodash.throttle';
// -------- витягуємо всі потрібні данні
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[type=email]');
const message = document.querySelector('textarea');
// -------- функції до форм
const fillingForm = () => {
  const values = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(values));
};
// -------------------------------------------------------------------
const onFormSubmit = e => {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
};
// ----------------------------------------------
function prewiousUserData() {
  const data = localStorage.getItem('feedback-form-state');
  if (data) {
    const parsedData = JSON.parse(data);
    email.value = parsedData.email;
    message.value = parsedData.message;
    console.log(parsedData);
  }
}
// ------------------------------

// -------- перевіряємо чи є щось у сховищі
prewiousUserData();
// -------- клік на кнопку сабміт
form.addEventListener('submit', onFormSubmit);
// -------- події в формі
form.addEventListener('input', throttle(fillingForm, 500));
