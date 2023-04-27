let containerEl = document.getElementsByClassName("container")[0];
let elementoBase = document.getElementById("first");
const quantidadeElementos = 10; //90


for (let i = 0; i < quantidadeElementos - 1; i++) {
    let copy = elementoBase.cloneNode(true);
    containerEl.appendChild(copy);
}