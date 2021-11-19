
import throttle from 'lodash.throttle';
const item = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};
const STORAGE_KEY = 'feedba0ck-form-state';

let formData = {};
item.form.addEventListener('submit', onFormSubmit);
item.form.addEventListener('input', throttle(onTextareaInput, 500));

function onTextareaInput(evt) {
  formData[item.textarea.name] = item.textarea.value;
  formData[item.input.name] = item.input.value;
  const saveDataEl = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, saveDataEl);
}

const savedMessage = localStorage.getItem(STORAGE_KEY);
const pasrsedSav = JSON.parse(savedMessage);

function populateTextarea() {
  if (savedMessage) {
    const keys = Object.keys(pasrsedSav);
    for (const key of keys) {
      item.form.elements[key].value = pasrsedSav[key];
    }
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(`${item.input.name}:`, item.input.value);
  console.log(`${item.textarea.name}:`, item.textarea.value);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}


populateTextarea();