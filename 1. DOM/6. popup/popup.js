/* jshint esversion: 8 */

const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

button.addEventListener('click', () => {
    popup.style.display = 'block';
});

close.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', () => {
    console.log('popup wrapper clicked!');
    popup.style.display = 'none';
});





