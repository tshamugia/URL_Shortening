const container = document.querySelectorAll(".container");

container.forEach((cont) => {
  const copy = cont.querySelector(".copy");
  const btnCopy = cont.querySelector(".btn-copy");

  btnCopy.addEventListener("click", async () => {
    await navigator.clipboard.writeText(copy.textContent);
    const copied = await navigator.clipboard.readText();
    console.log(copied);
  });
});
