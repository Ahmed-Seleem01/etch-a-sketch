const value = document.querySelector("#value");
const input = document.querySelector("#gridLength");
value.textContent = input.value + 'x' + input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value + 'x' + event.target.value;
});

drawGrid();
function drawGrid(gridNumber = 16){
  const container = document.querySelector('#container');
  let totalGridNumber = Math.floor(gridNumber * gridNumber);
  console.log(gridNumber);
  container.textContent = '';
  for(let i =0; i < totalGridNumber; i++){
    let div = document.createElement('div');
    div.classList.add('grid');
    div.setAttribute('style', `width: ${100/gridNumber}%; height: ${100/gridNumber}%;`)
    container.appendChild(div);
  }
}