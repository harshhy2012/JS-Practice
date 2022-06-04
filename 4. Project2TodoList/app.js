/* jshint esversion: 8 */
//adding todos
const addForm = document.querySelector('.add');
const todoList = document.querySelector('.todos');
const search = document.querySelector('.search input');   

const generateTemplate = todo => {
    if(todo.length){
        const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${todo}</span>
                    <i class="far fa-trash-alt delete"></i>
                  </li>`
    todoList.innerHTML += html;
    }
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const newTodo = e.target.add.value.trim();
    generateTemplate(newTodo);
    addForm.reset();
    todoList.append(newItem);
    
});


//delete todos
todoList.addEventListener('click', e => {
    console.log(e.classList);
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
    
});

const filterTodos = (term) => {
    Array.from(todoList.children)
    .filter( todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

    Array.from(todoList.children)
    .filter( todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
}

//searching
search.addEventListener('keyup', e =>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});
