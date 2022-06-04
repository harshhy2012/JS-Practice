/* jshint esversion: 8 */

const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');


form.addEventListener('submit', e =>{
    e.preventDefault();
    console.log(form.username.value);
    //console.log(username.value);
});

//testing regex
const username = 'harshit';
const pattern = /^[a-z]{6,}$/;
// let result = pattern.test(username);
// console.log(result);

let result = username.search(pattern);

console.log(result);