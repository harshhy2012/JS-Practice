/* jshint esversion: 8 */

// fetch('todos/harshit.json').then((response) => {
//     console.log('resolved: ', response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(err =>{
//     console.log('rejected: ', err);
// });

//asunc & await

const getTodos = () =>{
    const response = await fetch('todos/harshit.json');
    const data = await response.json();
};