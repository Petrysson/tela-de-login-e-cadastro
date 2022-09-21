let btn_eye = document.querySelector('#See-Password');//variável do olho (campo "SENHA")
let eye_confirmationPassword = document.querySelector('#See-ConfirmePassword');//variável do olho (campo "CONFIRMAR SENHA")

// VARIAVEIS DOS MEUS CAMPOS DO CADASTRO
let name = document.querySelector('#name');
let labelName = document.querySelector('#labelName');
let validName = false;

let user = document.querySelector('#user');
let labelUser = document.querySelector('#labelUser');
let validUser = false;

let password = document.querySelector('#password');
let labelPassword = document.querySelector('#labelPassword');
let validPassword = false;

let passwordConfirm = document.querySelector('#password-confirm');
let label_ConfirmPassword = document.querySelector('#labelConfirmPassword');
let validConfirmPassword = false;

// VARIAVES DAS DIV QUE ANALISAM E VALIDAM POR COMPLETO OS CAMPOS APÓS O CLICK NO BTN "CADASTRAR"
let msg_error = document.querySelector('#msg-error');
let msg_sucess = document.querySelector('#msg-sucess');

//VALIDAÇÕES DOS CAMPOS
name.addEventListener('keyup', ()=>{
    if(name.value.length <= 2){
        labelName.setAttribute('style', 'color:red');
        labelName.innerHTML = ' <strong>NOME</strong> *INSIRA NO MINIMO 3 CARACTERES';
        name.setAttribute('style', 'border-color:red');
        validName = false;
    } else{
        labelName.setAttribute('style', 'color:green');
        labelName.innerHTML = 'Nome';
        name.setAttribute('style', 'border-color:green');
        validName = true;
    }
})

user.addEventListener('keyup', ()=>{
    if(user.value.length <= 3){
        labelUser.setAttribute('style', 'color:red');
        labelUser.innerHTML = '<strong>USUARIO</strong> *Insira no minimo 4 caracteres';
        user.setAttribute('style', 'border-color:red');
        validUser = false;
    } else{
        labelUser.setAttribute('style', 'color:green');
        labelUser.innerHTML = 'Usuario';
        user.setAttribute('style', 'border-color:green');
        validUser = true;
    }
})

password.addEventListener('keyup', ()=>{
    if(password.value.length <= 5){
        labelPassword.setAttribute('style', 'color:red');
        labelPassword.innerHTML = '<strong>SENHA</strong> *Insira no minimo 6 caracteres';
        password.setAttribute('style', 'border-color:red');
        validPassword = false;
    } else{
        labelPassword.setAttribute('style', 'color:green');
        labelPassword.innerHTML = 'Senha';
        password.setAttribute('style', 'border-color:green');
        validPassword = true;
    }
})

passwordConfirm.addEventListener('keyup', ()=>{
    if(password.value != passwordConfirm.value){
        label_ConfirmPassword.setAttribute('style', 'color:red');
        label_ConfirmPassword.innerHTML = '<strong>CONFIRMAR SENHA</strong> *senhas não identicas';
        passwordConfirm.setAttribute('style', 'border-color:red');
        validConfirmPassword = false;
    } else{
        label_ConfirmPassword.setAttribute('style', 'color:green');
        label_ConfirmPassword.innerHTML = 'Confirmar Senha';
        passwordConfirm.setAttribute('style', 'border-color:green');
        validConfirmPassword = true;
    }
})

// FUNÇÃO DO BOTÃO CADASTRAR
function cadastrar(){
    if(validName && validUser && validPassword && validConfirmPassword){

        // CADASTRAR NO LOCALSTORAGE
        let listUser = JSON.parse(localStorage.getItem('listUser') || '[]');

        listUser.push(
            {
                name_CAD: name.value,
                user_CAD: user.value,
                password_CAD: password.value
            }
        )

        localStorage.setItem('listUser', JSON.stringify(listUser))

        msg_sucess.setAttribute('style', 'display:block');
        msg_sucess.innerHTML = 'cadastrando...'
        msg_error.innerHTML = '';
        msg_error.setAttribute('style', 'display:none');

        // DEPOIS QUE TODO O CÓDIGO ACIMA FOR EXECUTADO EU QUERO QUE VÁ PARA A TELA DE LOGIN COM UM DETERMINADO ESPAÇO DE TEMPO
        setTimeout(()=>{
            window.location.href = 'http://127.0.0.1:5500/index.html';
        },3000)

    } else {
        msg_error.setAttribute('style', 'display:block');
        msg_error.innerHTML = 'preencha todos os campos corretamente';
        msg_sucess.innerHTML = '';
        msg_sucess.setAttribute('style', 'display:none');
    }
}

// FAZER O ICONE DO OLHINHO MOSTRAR E ESCONDER A SENHA
btn_eye.addEventListener('click', ()=>{
    let inputPassword = document.querySelector('#password');

    if(inputPassword.getAttribute('type') == 'password'){
        inputPassword.setAttribute('type', 'text')
    } else {
        inputPassword.setAttribute('type', 'password')
    }
})

// FAZER O ICONE DO OLHINHO MOSTRAR E ESCONDER A SENHA DO CAMPO "CONFIRMAR SENHA"
eye_confirmationPassword.addEventListener('click', ()=>{
    let input_confirmationPassword = document.querySelector('#password-confirm');

    if(input_confirmationPassword.getAttribute('type') == 'password'){
        input_confirmationPassword.setAttribute('type', 'text');
    } else {
        input_confirmationPassword.setAttribute('type', 'password');
    }
})

