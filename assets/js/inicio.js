// MOSTRAR O NOME DO USUÁRIO LOGADO NA TELA
// CRIAR UMA FUNÇÃO QUE AO CLICAR NO BTN "SAIR" ELE APAGUE A CHAVE TOKEN GERADA E VOLTE PARA A TELA DE LOGIN
// DEPOIS CRIE UMA CONDIÇÃO QUE SÓ ACEITE A ENTRADA DE UM USUÁRIO NA TELA DE INICIO SE O SISTEMA TIVER GERADO UMA CHAVE TOKEN

let userLogado = JSON.parse(localStorage.getItem('userLogado'));

let logado = document.querySelector('#logado');
logado.innerHTML = `Olá ${userLogado.user}, seja bem vindo`

if(localStorage.getItem('token') == null){
    alert('você precisa estar logado para ter acesso a essa página')
    window.location.href = 'http://127.0.0.1:5500/index.html';

}

function go_out(){
    localStorage.removeItem('token');
    window.location.href = 'http://127.0.0.1:5500/index.html';
}