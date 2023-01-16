const value = document.querySelector("#value");
const input = document.querySelector("#gridLength");
value.textContent = input.value + 'x' + input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value + 'x' + event.target.value;
});

drawGrid();

let choosedColor = 'black';
const color = document.querySelector('#choose-color');
color.addEventListener('change', (e)=>{
  choosedColor = color.value;
  chossedBtn(e);
});

const buttons = document.querySelectorAll('.edit');
for(let button of buttons){
  button.addEventListener('click', chossedBtn)
}

input.addEventListener('change', ()=>{
  drawGrid(input.value);  
});

const draw = document.querySelector('#draw');
draw.addEventListener('click', ()=>{
  choosedColor = color.value;
})

const erase = document.querySelector('#erase');
erase.addEventListener('click', ()=>{
  choosedColor = 'white';
})

const btn2 = document.querySelector('#clear');
btn2.addEventListener('click', () => {
  clearGrid();  
});

const btn3 = document.querySelector('#show-grid');
btn3.addEventListener('click', () => {
  showGrid();  
});

document.addEventListener('mousedown', listenToEvent)
  document.addEventListener('mouseup',() =>{
  const grid = document.querySelectorAll('.grid');
  for(let g of grid){
    g.removeEventListener('mouseover', chooseColor);
  }
});


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

function chooseColor() {
  this.style.backgroundColor = choosedColor;
}

function chossedBtn (e){
  e.target.classList.add('chossed');
  for(let button of buttons){
    if(button !== e.target){
      button.classList.remove('chossed');
    }
  }
}

function listenToEvent(){
  const grid = document.querySelectorAll('.grid');
for(let g of grid){
  g.addEventListener('mouseover', chooseColor);
}}

function clearGrid(){
  const grid = document.querySelectorAll('.grid');
  for(let g of grid){
    if(g.style.backgroundColor !== 'white'){
      g.style.backgroundColor = 'white';
    }  
  }
}

function showGrid(){
  const grid = document.querySelectorAll('.grid');
  for(let g of grid){
    g.classList.toggle('show-grid');
  }
}