const value = document.querySelector("#value");
const input = document.querySelector("#gridLength");
value.textContent = input.value + 'x' + input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value + 'x' + event.target.value;
});