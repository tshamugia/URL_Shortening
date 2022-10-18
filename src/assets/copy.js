const results = document.querySelectorAll(".shortened--result");

results.forEach((element) => {
  const target = element.querySelector(".generated-link");
  const btnCopy = element.querySelector(".copy-btn");

  btnCopy.addEventListener("click", async () => {
    await window.navigator["clipboard"].writeText(target.textContent);
    const copied = await window.navigator["clipboard"].readText();
    console.log(copied);
  });
});
