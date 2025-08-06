const todoList = [];

function renderTodos(array) {
    const todoContainer = document.querySelector('.js-todo-list');
    todoContainer.innerHTML = '';

    array.forEach((element, index) => {
        const { name, dueDate } = element || { name: element, dueDate: null };
        const item = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
        todoList.splice(${index}, 1); 
        renderTodos(todoList);" class = "delete-todo-button">Delete</button>`;
        todoContainer.innerHTML += item;
    });
}

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoDateInput = document.getElementById('todoDate');
    const dueDate = todoDateInput.value ? new Date(todoDateInput.value).toLocaleDateString() : new Date().toLocaleDateString();

    if (todoInput.value.trim() === '') {
        alert('Please enter a todo item.');
        return;
    }
    const name = todoInput.value.trim();
    todoList.push({name, dueDate});
    todoInput.value = ''; 
    todoDateInput.value = ''; 

    renderTodos(todoList);
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}