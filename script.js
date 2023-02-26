const main = document.querySelector('.main');
const contact = document.querySelector('.contact');
const boxAL = document.querySelector('.boxAL');
const loginLink = document.querySelector('.loginLink');
const registerLink = document.querySelector('.registerLink');
const btnLogin = document.querySelector('.btnLogin');
const closeIcon = document.querySelector('.closeIcon');
const btnContact = document.querySelector('.btnContact');
const about = document.querySelector('.about');
const sendMessage = document.querySelector('.sendMessage');
const rentPage = document.querySelector('.rentPage');


registerLink.addEventListener('click', () => {
    boxAL.classList.add('active');
});

loginLink.addEventListener('click', () => {
    boxAL.classList.remove('active');
});

btnLogin.addEventListener('click', () => {
    boxAL.classList.add('active-btnLogin');
});

btnLogin.addEventListener('click', () => {
    boxAL.classList.add('active-btnLogin');
});

btnLogin.addEventListener('click', () => {
    main.classList.add('active-btnLogin');
});

btnLogin.addEventListener('click', () => {
    contact.classList.add('active-btnLogin');
});

btnLogin.addEventListener('click', () => {
    about.classList.add('active-btnLogin');
});

closeIcon.addEventListener('click', () => {
    boxAL.classList.remove('active-btnLogin');
});

closeIcon.addEventListener('click', () => {
    main.classList.remove('active-btnLogin');
});

closeIcon.addEventListener('click', () => {
    contact.classList.remove('active-btnLogin');
});

closeIcon.addEventListener('click', () => {
    about.classList.remove('active-btnLogin');
});

btnLogin.addEventListener('click', () => {
    rentPage.classList.add('active-btnLogin');
});

closeIcon.addEventListener('click', () => {
    rentPage.classList.remove('active-btnLogin');
});
function help() {
    sendMessage.classList.add('active-btnContact');
}