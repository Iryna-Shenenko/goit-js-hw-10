import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let chosenDate, difference, intervalId;

const picker = document.querySelector('#datatime-piker');
const startButton = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-manites]');
const secondsElement = document.querySelector('[data-seconds]');

startButton.disabled = true;

flatpickr(picker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    chosenDate = selectedDates[0].getTime();
    if (chosenDate <= Date.now()) {
      showError('Please choose a date in the future');
      startButton.disabled = true;
    } else {
     difference = chosenDate - Date.now();
      startButton.disabled = false;
    }
  },
});
startButton.addEventListener('click', () => {
  intervalId = setInterval(updateCountdown, 1000);
  startButton.disabled = true;
  picker.disabled = true;
});


function updateCountdown() {
  if (difference <= 0) {
    clearInterval(intervalId);
    picker.disabled = false;
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(difference);
  daysElement.textContent = addLeadingZero(days);
  hoursElement.textContent = addLeadingZero(hours);
  minutesElement.textContent = addLeadingZero(minutes);
  secondsElement.textContent = addLeadingZero(seconds);

  difference -= 1000;
}

function convertMs(ms) {
  const second = 1000, minute = 60 * second, hour = 60 * minute, day = 24 * hour;
  return {
    days: Math.floor(ms / day),
    hours: Math.floor((ms % day) / hour),
    minutes: Math.floor((ms % hour) / minute),
    seconds: Math.floor((ms % minute) / second),
  };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function showError(message) {
  iziToast.error({
    message,
    position: 'topRight',
    timeout: 0,
    backgroundColor: '#EF4040',
    messageColor: '#FFFFFF',
    close: true,
  });
}