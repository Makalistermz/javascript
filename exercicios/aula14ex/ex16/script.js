function contar() {
    let ini = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let pu = document.getElementById('pulo');
    const res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pu.value.length == 0 ) {
        window.alert(`[ERRO] Faltam dados!`)
    } else {
        res.innerHTML = 'Contando: <br>';
        let inicio = Number(ini.value);
        let fi = Number(fim.value);
        let pulo = Number(pu.value);

        for (let n = inicio; n <= fi; n += pulo) {
            res.innerHTML += ` ${n} \u{1F449}`;
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

