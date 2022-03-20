import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

const onInput = () => {
  const formData = {
    email: formRef.elements.email.value,
    message: formRef.elements.message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const rehydrateData = () => {
  const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!parsedData) return;

  formRef.elements.email.value = parsedData.email;
  formRef.elements.message.value = parsedData.message;
};
rehydrateData();

const submitInput = e => {
  e.preventDefault();

  const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(parsedData);

  localStorage.removeItem(STORAGE_KEY);
  e.target.reset();
};

formRef.addEventListener('submit', submitInput);
formRef.addEventListener('input', throttle(onInput, 500));
