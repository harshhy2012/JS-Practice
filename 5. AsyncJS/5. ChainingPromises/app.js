/* jshint esversion: 8 */
const getTodos = (resource) => {

    

    return new Promise((resolve, reject) =>{

        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState ===4){
                reject('Cannot get the data!');
            }
        });
    
        request.open('GET', resource);
        request.send();
    });

   

};

getTodos('todos/harshit.json')
.then(data =>{
    console.log('promise 1 resolved: ', data);
    return getTodos('todos/kalpna.json');
}).then(data => {
    console.log('promise 2 resolved: ', data);
    return getTodos('todos/pooja.json');
}).then(data => {
    console.log('promise 3 resolved: ', data);
})
.catch(err => console.log('promise rejected: ', err));