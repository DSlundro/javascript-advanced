'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal')

let openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

let closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnOpenModal.length; i++) btnOpenModal[i].addEventListener('click', openModal)
btnCloseModal.addEventListener('click', closeModal)

// close modal on ESC keydown
document.addEventListener('keydown', (e) => {
    console.log(e.key);
    (e.key === 'Escape' && !modal.classList.contains('hidden')) ? closeModal() : '';
})