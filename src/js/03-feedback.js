import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const onInputText = () => {
    const { email, message } = formRef.elements;

    const data = {
        [email.name]: email.value,
        [message.name]: message.value,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

const dataStorage = () => {
    const localData = localStorage.getItem(STORAGE_KEY);

    if (localData) {
        const data = JSON.parse(localData);
        formRef.elements.email.value = data.email;
        formRef.elements.message.value = data.message;
    }
};

dataStorage();

const onSubmitClick = e => {
    e.preventDefault();

    const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    console.log(parsedData);

    e.target.reset();

    localStorage.removeItem(STORAGE_KEY);
};

formRef.addEventListener('input', throttle(onInputText, 500));
formRef.addEventListener('submit', onSubmitClick);
