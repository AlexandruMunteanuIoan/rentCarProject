const main = document.querySelector('.main');
const contact = document.querySelector('.contact');
const boxAL = document.querySelector('.boxAL');
const loginLink = document.querySelector('.loginLink');
const registerLink = document.querySelector('.registerLink');
const btnLogin = document.querySelector('.btnLogin');
const closeIcon = document.querySelector('.closeIcon');
const btnContact = document.querySelector('.btnContact');

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
    main.classList.add('active-btnLogin');
    contact.classList.add('active-btnLogin');
});

closeIcon.addEventListener('click', () => {
    boxAL.classList.remove('active-btnLogin');
    main.classList.remove('active-btnLogin');
    contact.classList.remove('active-btnLogin');
});

btnContact.addEventListener('click', showMessage());
function showMessage() {
    document.getElementById("sendMessage").style.visibility = "visible"
};

function hiddenMessage() {
    document.getElementById("sendMessage").style.visibility = "hidden"
} setTimeout("hiddenMessage()", 5000);