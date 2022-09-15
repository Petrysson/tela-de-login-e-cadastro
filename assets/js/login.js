let btn_eye = document.querySelector('.fa-eye');

btn_eye.addEventListener('click', ()=>{
    let inputPassword = document.querySelector('#password');

    if(inputPassword.getAttribute('type') == 'password'){
        inputPassword.setAttribute('type', 'text')
    } else {
        inputPassword.setAttribute('type', 'password')
    }
})