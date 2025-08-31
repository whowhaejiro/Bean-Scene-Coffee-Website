const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelectorAll('.close-modal');
const overlay = document.querySelector(".modal-overlay");
const signInBtn = document.getElementById('sign-in-btn');
const signUpBtn = document.getElementById('sign-up-btn');
const modalSignIn = document.querySelector('.modal-signin');
const modalSignUp = document.querySelector('.modal-signup');
const goToSignUp = document.getElementById('go-to-signup');
const goToSignIn = document.getElementById('go-to-signin');
const forgotPasswordBtn = document.getElementById('forgot-password-btn');
const modalForgotPassword  = document.querySelector('.modal-forgot-password');
const goToLogin = document.getElementById('go-to-login');

const openModal = function() {
    console.log("Modal opened");
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.body.style.overflow = "hidden";
}

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    document.body.style.overflow = "";
}

signInBtn.addEventListener('click', () => {
    openModal();
    modalSignIn.classList.remove('hidden');
    modalSignUp.classList.add('hidden');
    modalForgotPassword.classList.add('hidden');
})

signUpBtn.addEventListener('click', () => {
    openModal();
    modalSignIn.classList.add('hidden');
    modalSignUp.classList.remove('hidden');
    modalForgotPassword.classList.add('hidden');
})

goToSignUp.addEventListener('click', (e) => {
    e.preventDefault();
    modalSignIn.classList.add('hidden');
    modalSignUp.classList.remove('hidden');
})

goToSignIn.addEventListener('click', (e) => {
    e.preventDefault();
    modalSignUp.classList.add('hidden');
    modalSignIn.classList.remove('hidden');
})

forgotPasswordBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modalSignIn.classList.add('hidden');
    modalSignUp.classList.add('hidden');
    modalForgotPassword.classList.remove('hidden');
})

goToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    modalForgotPassword.classList.add('hidden');
    modalSignIn.classList.remove('hidden');
    modalSignUp.classList.add('hidden');
})

window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');

    if(window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

for(let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', openModal);

    btnCloseModal[i].addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
}