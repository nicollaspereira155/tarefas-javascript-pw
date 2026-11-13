
const numero1 = document.querySelector('#numero1');
const numero2 = document.querySelector('#numero2');
const visor = document.querySelector('.mensagem-final');
const btnEnviar = document.querySelector('#enviar');
const mensagemErroPrimeiro = document.querySelector('.mensagem-erro-primeiro');
const mensagemErroSegundo = document.querySelector('.mensagem-erro-segundo');

btnEnviar.addEventListener('click', () => {
    const numero1Digitado = numero1.value;
    const numero2Digitado = numero2.value;

    if (numero1Digitado == "") {
        mensagemErroPrimeiro.textContent = 'Este campo está em branco ou inválido.';
    } else if (numero2Digitado == "") {
        mensagemErroPrimeiro.textContent = ''
        mensagemErroSegundo.textContent = 'Este campo está em branco ou inválido.';
    } else {
        mensagemErroSegundo.textContent = ''
        const subtracao = Number(numero1Digitado) - Number(numero2Digitado);
        const mensagemFinal = `A subtração dos números que você escolheu (${numero1Digitado} e ${numero2Digitado}), é: ${subtracao}.`;
        visor.textContent = mensagemFinal;
    }
});
