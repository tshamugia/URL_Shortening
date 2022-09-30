"use strict";

const baseURL = "https://api.shrtco.de/v2/shorten?url=";

const userInput = document.querySelector(".shorten--input");
const shortenBtn = document.querySelector(".shorten--button");

const generatedLink = document.querySelector(".generated-link");
const originalLink = document.querySelector(".shortened--link");
const shortenWrapper = document.querySelector("#shorten-wrapper");
const resultBox = [];

const shortenResult = async () => {
  const response = await axios(baseURL + userInput.value);
  const shortenLink = await response.data.result.short_link;
  //   originalLink.textContent = userInput.value;
  //   generatedLink.textContent = shortenLink;
  shortenWrapper.classList.remove("shorten-hide");
  resultBox.push({ [userInput.value]: shortenLink });
  console.log(resultBox);
};

shortenBtn.addEventListener("click", shortenResult);
