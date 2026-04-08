let containerbarra = document.querySelector('.container-ativa');
const btn = document.querySelector('.btn span');

function ativar() {
    const barra = document.getElementById('barra');
    barra.classList.add('ativa');

    barra.addEventListener('animationend', function() {
        btn.textContent = 'Concluído!';
    })
}