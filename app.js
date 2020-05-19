let generate=document.getElementById('generate');
let container=document.getElementById('container');
let rainbow=document.getElementById('rainbow');
let black=document.getElementById('black');
let eraser=document.getElementById('eraser');
let clear=document.getElementById('clear');
function generategrid(){
let num=prompt("Enter Size",'16');
for (let rows = 0; rows < num; rows++) {
    for(let columns=0;columns<num;columns++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
};
container.style.gridTemplateColumns= `repeat(${num},1fr)`;
container.style.gridTemplateRows= `repeat(${num},1fr)`;
};
function erase()
{
    let cells = [...document.querySelectorAll(".cell")];
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      cell.style.backgroundColor = 'white';
      cell.style.transition = "0.3s";
    });
  });
};
function eraserall()
{
    let cells = [...document.querySelectorAll(".cell")];
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
        cell.style.transition = "0.3s";
      });
};
function colourrandom(){
    let cells = [...document.querySelectorAll(".cell")];
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
        let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
      cell.style.backgroundColor = randomColor;
      cell.style.transition = "0.3s";
    });
  });
};
function colourblack()
{
    let cells = [...document.querySelectorAll(".cell")];
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      cell.style.backgroundColor = 'black';
      cell.style.transition = "0.3s";
    });
  });
};
generate.addEventListener("click",generategrid);
rainbow.addEventListener("click",colourrandom);
black.addEventListener("click",colourblack);
eraser.addEventListener("click",erase);
clear.addEventListener("click",eraserall);