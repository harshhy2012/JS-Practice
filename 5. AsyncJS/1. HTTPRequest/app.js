
/* jshint esversion: 8*/

const getTodos = (resource, callback) => {
    request.addEventListener('readystatechange', () => {
        //console.log(request, request.readyState);
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if(request.readyState === 4){
            callback('could not fetch data!', undefined);
        }
    });
    
    request.open('GET', resource);
    request.send();
};

const request = new XMLHttpRequest();

console.log(1);
console.log(2);

getTodos('todos/harshit.json', (err, data) =>{
    console.log('callback fired'); 
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});

console.log(3);
console.log(4);