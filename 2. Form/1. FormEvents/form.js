/* jshint esversion: 8 */

const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');


form.addEventListener('submit', e =>{
    e.preventDefault();
    console.log(form.username.value);
    //console.log(username.value);
});
