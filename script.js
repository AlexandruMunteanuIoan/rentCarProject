const main = document.querySelector('.main');
const boxAL = document.querySelector('.boxAL');
const loginLink = document.querySelector('.loginLink');
const registerLink = document.querySelector('.registerLink');
const btnLogin = document.querySelector('.btnLogin');
const closeIcon = document.querySelector('.closeIcon');

registerLink.addEventListener('click', ()=>
{
    boxAL.classList.add('active');
});

loginLink.addEventListener('click', ()=>
{
    boxAL.classList.remove('active');
});

btnLogin.addEventListener('click', ()=>
{
    boxAL.classList.add('active-btnLogin');
});

btnLogin.addEventListener('click', ()=>
{
    boxAL.classList.add('active-btnLogin');
    main.classList.add('active-btnLogin');
});

closeIcon.addEventListener('click', ()=>
{
    boxAL.classList.remove('active-btnLogin');
    main.classList.remove('active-btnLogin');
});