function contar() {
    let ini = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let pu = document.getElementById('pulo');
    const res = document.getElementById('res')

    let inicio = Number(ini.value);
    let fi = Number(fim.value);
    let pulo = Number(pu.value);

    if (pulo <= 0) {
        window.alert(`[ERRO] Passo inválido. O passo deve ser maior que 0.`)
    }

    res.innerHTML = 'Contando:<br>';

    if (inicio < fi) {
        for (var n = inicio; n <= fi; n += pulo) {
            res.innerHTML += `${n} 👉 `;
        }
    }

}

