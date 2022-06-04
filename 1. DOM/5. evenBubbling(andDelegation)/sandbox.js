/* jshint esversion: 8 */
console.log("working!");
//const items = document.querySelectorAll('li');
const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    ul.prepend(li);
});

// items.forEach(item => {
//     item.addEventListener('click', (e) =>{
//         e.target.remove();
//         e.stopPropagation();
//         console.log('event in LI');
//     });
// });

ul.addEventListener('click', (e) =>{
   console.log(e.target);
   if(e.target.tagName === 'LI'){
       e.target.remove();
   }
});