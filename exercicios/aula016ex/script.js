let valores = [];

function adicionar() {
        let num = document.getElementById('numero');
        let tabu = document.getElementById('tabuada');

        let nu = Number(num.value);
        
    if (nu <= 100 && nu >= 0) {
        let item = document.createElement('option');
        item.text = `Valor ${nu} adicionado!`;
        tabu.appendChild(item);
        valores.push(nu)
    } else {
        window.alert('Valor Não definido ou Já existe este valor');
    }

}

function finalizar() {
    let res = document.getElementById('res');
    let tabu = document.getElementById('tabuada');

    if (valores.length === 0) {
        window.alert('Adicione valores antes!');
        return;
    }

    let maior = Math.max(...valores)
    let menor = Math.min(...valores)

    res.innerHTML = `
    Ao todo temos ${tabu.length} números cadastrados.<br>
    O maior valor cadastrado foi ${maior}. <br>
    O menor valor cadastrado foi ${menor}. <br>
    `;
}
