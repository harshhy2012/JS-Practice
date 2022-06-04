// const button = document.querySelector('button');

// button.addEventListener('click', () =>{
//     console.log('you clicked me!');
// });

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', (e)=> {
//         //console.log(`item number ${index+1} clicked!`);
//         //console.log(e);
//         console.log(e.target);
//         e.target.style.textDecoration = 'line-through'
//     });
// });

const button = document.querySelector('button');

button.addEventListener('click', () => {
    //add new todo
    const li = document.createElement('li');
    li.textContent = 'Something New Todo!';
    //ul.append(li);
    ul.prepend(li);
});

const ul = document.querySelector('ul');

Array.from(ul.children).forEach(item => {
    item.addEventListener('click', (e)=> {
        //console.log(`item number ${index+1} clicked!`);
        //console.log(e);
        console.log(e.target);
        e.target.remove(); 
    });
});