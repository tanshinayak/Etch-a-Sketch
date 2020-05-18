let generate=document.getElementById('generate');
let container=document.getElementById('container');
let rainbow=document.getElementById('rainbow');
let black=document.getElementById('black');
let eraser=document.getElementById('eraser');
let clear=document.getElementById('clear');
function generategrid(){
let num=prompt("Enter Size",'');
for (let rows = 0; rows < num; rows++) {
    for(let columns=0;columns<num;columns++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerHTML=rows+columns;
        container.appendChild(cell);
    }
};
};
generate.addEventListener("click",generategrid);