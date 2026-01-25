const { createElement } = require("react");

function gerar() {
    let num = document.getElementById('numero');
    let tabu = document.getElementById('tabuada');

    if (num.value.length == 0){
        window.alert('Por favor digite um número!')
    } else {
        let nu = Number(num.value);
        tabu.innerHTML = ''
        for(var t = 1; t <= 10; t++){
            let item = document.createElement('option');
            item.text = `${nu} x ${t} = ${nu*t} `
            tabu.appendChild(item) //adicionar um elemento filho
        }
    }
}