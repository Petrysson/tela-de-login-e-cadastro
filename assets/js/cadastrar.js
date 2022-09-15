let btn_eye = document.querySelector('#See-Password');//variável do olho (campo "SENHA")
let eye_confirmationPassword = document.querySelector('#See-ConfirmePassword');//variável do olho (campo "CONFIRMAR SENHA")

// VARIAVEIS DOS MEUS CAMPOS DO CADASTRO
let name = document.querySelector('#name');
let labelName = document.querySelector('#labelName');

let user = document.querySelector('#user');
let labelUser = document.querySelector('#labelUser');

let password = document.querySelector('#password');
let labelPassword = document.querySelector('#labelPassword');

let passwordConfirm = document.querySelector('#password-confirm');
let label_ConfirmPassword = document.querySelector('#labelConfirmPassword');

//VALIDAÇÕES DOS CAMPOS
name.addEventListener('keyup', ()=>{
    if(name.value.length <= 2){
        labelName.setAttribute('style', 'color:red');
        labelName.innerHTML = ' <strong>NOME</strong> *INSIRA NO MINIMO 3 CARACTERES';
        name.setAttribute('style', 'border-color:red');
    } else{
        labelName.setAttribute('style', 'color:green');
        labelName.innerHTML = 'Nome';
        name.setAttribute('style', 'border-color:green');
    }
})

user.addEventListener('keyup', ()=>{
    if(user.value.length <= 3){
        labelUser.setAttribute('style', 'color:red');
        labelUser.innerHTML = '<strong>USUARIO</strong> *Insira no minimo 4 caracteres';
        user.setAttribute('style', 'border-color:red');
    } else{
        labelUser.setAttribute('style', 'color:green');
        labelUser.innerHTML = 'Usuario';
        user.setAttribute('style', 'border-color:green');
    }
})

password.addEventListener('keyup', ()=>{
    if(password.value.length <= 5){
        labelPassword.setAttribute('style', 'color:red');
        labelPassword.innerHTML = '<strong>SENHA</strong> *Insira no minimo 6 caracteres';
        password.setAttribute('style', 'border-color:red');
    } else{
        labelPassword.setAttribute('style', 'color:green');
        labelPassword.innerHTML = 'Senha';
        password.setAttribute('style', 'border-color:green');
    }
})

passwordConfirm.addEventListener('keyup', ()=>{
    if(password.value != passwordConfirm.value){
        label_ConfirmPassword.setAttribute('style', 'color:red');
        label_ConfirmPassword.innerHTML = '<strong>CONFIRMAR SENHA</strong> *As senhas não são iguais';
        passwordConfirm.setAttribute('style', 'border-color:red');
    } else{
        label_ConfirmPassword.setAttribute('style', 'color:green');
        label_ConfirmPassword.innerHTML = 'Confirmar Senha';
        passwordConfirm.setAttribute('style', 'border-color:green');
    }
})

// FUNÇÃO DO BOTÃO CADASTRAR
function cadastrar(){
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

