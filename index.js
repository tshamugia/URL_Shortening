"use strict";

const baseURL = "https://api.shrtco.de/v2/shorten?url=";

const userInput = document.querySelector(".shorten--input");
const shortenBtn = document.querySelector(".shorten--button");
const shortenWrapper = document.querySelector(".shorten-wrapper");
const errorBox = document.querySelector(".errorBox");
const navBtn = document.querySelector(".nav-btn");
const mobileNav = document.querySelector("#mobileNav");

navBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
});

const store = [];

function ResultBox() {
  for (let i = 0; i < sessionStorage.length; i++) {
    let origin = sessionStorage.key(i);
    let generated = sessionStorage.getItem(origin);
    store.push({ origin, generated });
  }
}

const shortenResult = async () => {
  let response;
  let shortenLink;
  if (!userInput.value) {
    errorBox.textContent = "Enter URL";
    userInput.classList.add("error");
    return;
  }
  try {
    response = await axios(baseURL + userInput.value);
    shortenLink = await response.data.result.short_link;
    sessionStorage.setItem(userInput.value, shortenLink);
    location.reload();
  } catch (error) {
    errorBox.textContent = "Please enter valid URL";
    userInput.classList.add("error");
  }
};
ResultBox();

const displayResult = store.map((item) => {
  return `
  <div class="shortened">
  <div class="shortened--link" id="origin" >${item.origin}</div>
  <div class="shortened--result">
    <div class="generated-link">${item.generated}</div>
    <button class="copy-btn">Copy</button>
  </div>
  </div>
  `;
});

shortenWrapper.innerHTML = displayResult;

shortenBtn.addEventListener("click", shortenResult);
