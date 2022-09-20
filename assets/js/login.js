let btn_eye = document.querySelector('.fa-eye');

btn_eye.addEventListener('click', ()=>{
    let inputPassword = document.querySelector('#password');

    if(inputPassword.getAttribute('type') == 'password'){
        inputPassword.setAttribute('type', 'text');
    } else {
        inputPassword.setAttribute('type', 'password');
    }
})

function login(){
    let user = document.querySelector('#user');
    let labelUser = document.querySelector('#labelUser');

    let password = document.querySelector('#password');
    let labelPassword = document.querySelector('#labelPassword');

    let msgError = document.querySelector('#msg-error');
    let listUser = []

    let userValid = {
        name: '',
        user: '',
        password: ''
    }

    listUser =  JSON.parse(localStorage.getItem('listUser'));
    
    listUser.forEach((item) => {
        if(user.value == item.user_CAD && password.value == item.password_CAD){
            userValid = {
                name: item.name_CAD,
                user: item.user_CAD,
                password: item.password_CAD
            }
        }
    });

    
    if(user.value == userValid.user && password.value == userValid.password){
        window.location.href = 'http://127.0.0.1:5500/assets/telaInicio/inicio.html';

        // FAZER UMA CHAVE TOKEN PARA TER ACESSO A TELA DE INICIO E TER MAIS SEGURANÇA
        let token = Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)

        // INSERIR NOME DO USUARIO NA TELA DE INICIO
        localStorage.setItem('userLogado', JSON.stringify(userValid));
        
    } else {
        user.setAttribute('style', 'border-color:red');
        labelUser.setAttribute('style', 'color:red');

        password.setAttribute('style', 'border-color:red');
        labelPassword.setAttribute('style', 'color:red');

        msgError.setAttribute('style', 'display:block');
        msgError.innerHTML = 'Usuário ou Senha incorretos';
        user.focus();
    }
}