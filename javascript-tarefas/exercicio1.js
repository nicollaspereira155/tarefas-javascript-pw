const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');
const visor = document.querySelector('.mensagem-final')
const btnEnviar = document.querySelector('#enviar');
const mensagemErroNome = document.querySelector('.mensagem-erro-nome');
const mensagemErroIdade = document.querySelector('.mensagem-erro-idade');

btnEnviar.addEventListener('click', ()=>{
    const nomeDigitado = nome.value;
    const idadeDigitada = idade.value;
    if (nomeDigitado == "") {
        mensagemErroNome.textContent = 'Este campo está em branco ou inválido.'
    }else if (idadeDigitada == "") {
        mensagemErroNome.textContent = ''
        mensagemErroIdade.textContent = 'Este campo está em branco ou inválido.'
    } else {
        mensagemErroNome.textContent = ''
        mensagemErroIdade.textContent = ''
        const mensagemFinal = `Olá! Meu nome é ${nomeDigitado} e tenho ${idadeDigitada} anos.`;
        visor.textContent = mensagemFinal;
    }
});