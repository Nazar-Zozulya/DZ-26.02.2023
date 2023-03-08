//Виполняется при виходе из страниць.
function setForm()
{
    localStorage.setItem('username',username.value);
    localStorage.setItem('email',email.value);
    localStorage.setItem('password',password.value);
}
//Виполняется при входе на сайт.
function getForm()
{
    //localStorage.getItem('username');
    username.value = localStorage.getItem('username');
    email.value = localStorage.getItem('email');
    password.value = localStorage.getItem('password');
}
//Виполняется при отправки форми.
function clearForm()
{
    localStorage.clear();
}

window.addEventListener("beforeunload", setForm);

document.addEventListener("DOMContentLoaded", getForm);

reg.addEventListener("submit", clearForm);







