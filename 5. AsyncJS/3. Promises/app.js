
/* jshint esversion: 8*/


const getTodos = (resource) => {
    
    return new Promise((resolve, reject) =>{
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            resolve(data);
        } else if(request.readyState === 4){
            reject('could not fetch data!');
        }
    });
    
    request.open('GET', resource);
    request.send();
    }); 
};

getTodos('todos/harshit.son')
    .then( data => console.log('promise resolved: ', data))
    .catch( err => console.log('promise rejected: ', err));
//     // promises example

// const getSomething = () => {

//     return new Promise((resolve, reject) =>{
//         //fetvh
//     });
// };