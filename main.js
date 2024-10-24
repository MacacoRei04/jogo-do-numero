let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    const palpites = document.querySelector('.palpites');
    const ultimoResultado = document.querySelector('.ultimoResultado');
    const baixoOuAlto = document.querySelector('.baixoOuAlto');
    const envioPalpite = document.querySelector('.envioPalpite');
    const campoPalpite = document.querySelector('.campoPalpite');
    let contagemPalpites = 1;
    let botaoReiniciar;

function verificarPalpite() {
    const palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
        palpites.textContent = "Palpites anteriores: ";
    }

palpites.textContent += palpitesUsuario + " ";

    if(palpiteUsuario === numeroAleatorio {
        ultimoResultado.textContent = "parabéns! Você acertou!";
        ultimoResultado.computedStyleIeMap.backgroundColor = "green";
        baixoOuAlto.textContent = "";
        finalizarJogo();
    } else if (contagemPalpites === 10) {
        ultimoResultado.textContent = "FIM DE JOGO!!!";
        baixoOuAlto.textContent = "";
        finalizarJogo();
    } else {
        ultimoResultado.textContent = "Errado";
        ultimoResultado.computedStyleMap.backgroundColor = "red";
        if (palpiteUsuario < numeroAleatorio){
            baixoOuAlto.textContent = "O último palpite foi muito baixo";
        } else if (palpiteUsuario > numero)
            baixoOuAlto.textContent = "O último palpite foi muito alto";
}


contagemPalpites++;
campoPalpite.value = "";
campoPalpite.focus();
}

envioPalpite.addEventListener('click', verificarPalpite);

function finalizarJogo() {
    campoPalpite.disabled = true;
    campoPalpite.disabled = false;
    botaoReiniciar = document.createElement('button');
    document.body.appendChild(botaoReiniciar);
    botaoReiniciar.addEventListener('click', reiniciarJogo)
}

function reiniciarJogo() {
    contagemPalpites = 1;
    const paragrafoReiniciar = document.querySelectorAll('.paragrafoResultado p');
    for (const paragrafoReiniciar of paragrafoReiniciar) {
        paragrafoReiniciar.textContent = "";
}

botaoReiniciar.parentNode.removeChild;
campoPalpite.disabled = false;
envioPalpite.disabled = false;
campoPalpite.value = "";
campoPalpite.focus();
ultimoResultado.computedStyleIeMap.backgroundColor = 'white';
numeroAleatorio = Math.floor(math.random() * 100) + 1;
}