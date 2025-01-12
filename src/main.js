import "./main.css";

const countDownDate = new Date("Jun 19, 2026 00:00:00").getTime();

function createSeparatorElement() {
  const separatorElement = document.createElement("span");
  separatorElement.innerHTML = ":";
  separatorElement.classList.add("separator");
  return separatorElement;
}

function createTimeOutElement() {
  const separatorElement = document.createElement("span");
  separatorElement.innerHTML = "ALTINN 2 TERMINATED";
  separatorElement.classList.add("separator");
  separatorElement.classList.add("center-block");
  return separatorElement;
}

function createDaysElement(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const daysElement = document.createElement("span");
  daysElement.innerHTML = days;
  return daysElement;
}

function createHoursElement(time) {
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const hooursWithLeadingZero = hours < 10 ? `0${hours}` : hours;
  const hoursElement = document.createElement("span");
  hoursElement.innerHTML = hooursWithLeadingZero;
  return hoursElement;
}

function createMinutesElement(time) {
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const minutesWithLeadingZero = minutes < 10 ? `0${minutes}` : minutes;
  const minutesElement = document.createElement("span");
  minutesElement.innerHTML = minutesWithLeadingZero;
  return minutesElement;
}

function createSecondsElement(time) {
  const seconds = Math.floor((time % (1000 * 60)) / 1000);
  const secondsWithLeadingZero = seconds < 10 ? `0${seconds}` : seconds;
  const secondsElement = document.createElement("span");
  secondsElement.innerHTML = secondsWithLeadingZero;
  return secondsElement;
}

const x = setInterval(function () {
  const now = new Date().getTime();
  const timeLeft = countDownDate - now;

  const clockElement = document.getElementById("clock");

  const daysElement = createDaysElement(timeLeft);
  const hoursElement = createHoursElement(timeLeft);
  const minutesElement = createMinutesElement(timeLeft);
  const secondsElement = createSecondsElement(timeLeft);

  clockElement.innerHTML = "";
  clockElement.appendChild(daysElement);
  clockElement.appendChild(createSeparatorElement());
  clockElement.appendChild(hoursElement);
  clockElement.appendChild(createSeparatorElement());
  clockElement.appendChild(minutesElement);
  clockElement.appendChild(createSeparatorElement());
  clockElement.appendChild(secondsElement);

  if (timeLeft < 0) {
    clearInterval(x);
    clockElement.innerHTML = "";
    clockElement.appendChild(createTimeOutElement());
  }
}, 1000);
