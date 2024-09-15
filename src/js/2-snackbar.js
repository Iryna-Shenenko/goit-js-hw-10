
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const promiseForm = document.querySelector('.form');

const choosePromise = (event) => {
    event.preventDefault();
    const form = event.target;
    const enterInput = form.elements.delay.value;
    const choosedPromise = form.elements.state.value;
    const promiseType = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (choosedPromise === 'fulfilled') {
                resolve(iziToast.show({
              backgroundColor: 'green',
              messageColor: 'white',
              message: `✅ Fulfilled promise in ${enterInput}ms`
          }));
            };
            if (choosedPromise === 'rejected') {
                reject(iziToast.show({
              backgroundColor: 'red',
              messageColor: 'white',
              message: `❌ Rejected promise in ${enterInput}ms`
          }))
            }
        }, enterInput);
    });
    form.reset();
};

promiseForm.addEventListener('submit', choosePromise);
  