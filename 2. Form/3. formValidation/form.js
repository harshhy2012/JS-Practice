/* jshint esversion: 8 */

const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e =>{
    e.preventDefault();
    //validation
    const username = form.username.value;
    const usernamePattern = /^[a-zA-z]{6,12}$/;
    if(usernamePattern.test(username)){
        feedback.textContent = 'that username is valid';
    }
    else{
        feedback.textContent = 'username must contain only upper and lower case letter and be 6 to 12 characters in length';
    }

});