function adicionar() {
    let num = document.getElementById('numero');
    let tabu = document.getElementById('tabuada');

    let nu = Number(num.value);

    if (nu <= 100 && nu >= 0) {
        let item = document.createElement('option');
        item.text = `Valor ${nu} adicionado!`;
        tabu.appendChild(item);
    } else {
        window.alert('Valor Não definido ou Já existe este valor');
    }

}

function finalizar() {
    let num = document.getElementById('numero');
    let tabu = document.getElementById('tabuada');
    let res = document.getElementById('res');

    let nu = Number(num.value);

    res.innerHTML = `Ao todo temos ${tabu.length} números cadastrados.`;
    res.innerHTML = `O maior valor cadastrado foi ${tabu.length.}.`;
}
