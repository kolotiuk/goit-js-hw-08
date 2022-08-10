const formRef = document.querySelector('.feedback-form');
var throttle = require('lodash.throttle');

const STORAGE_KEY = 'feedback-form-state';

const onInput = e => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);

  const object = {
    ...parsedData,
    [e.target.name]: e.target.value,
  };

  const serializedData = JSON.stringify(object);
  localStorage.setItem(STORAGE_KEY, serializedData);
};

formRef.addEventListener('input', throttle(onInput, 500));

const rehydrateData = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);

  if (!savedData) {
    return;
  }

  formRef.elements.email.value = parsedData.email;
  formRef.elements.message.value = parsedData.message;
};

rehydrateData();

const onFormSubmit = e => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  const finalObject = {};

  for (const [key, value] of formData.entries()) {
    finalObject[key] = value;
  }

  console.log(finalObject);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
};

formRef.addEventListener('submit', onFormSubmit);
