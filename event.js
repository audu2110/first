const ul = document.querySelector('.items');
ul.firstElementChild.textContent = 'HELLO';
ul.firstElementChild.style.background='green';
ul.children[1].style.background = 'yellow';

function onClick(){
    alert();
}

function mouseOver() {
    document.getElementById("od").style.background='red';
}

function mouseOut() {
    document.getElementById("od").style.background='black';
}
