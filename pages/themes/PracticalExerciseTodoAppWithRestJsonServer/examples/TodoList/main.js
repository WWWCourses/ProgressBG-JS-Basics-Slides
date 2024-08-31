// Fetch todos from the API and render them
function fetchTodos() {
    fetch(todosAPI)
        .then(response => response.json())
        .then(data => {
            // Change local state
            todos = data.slice(0, 10);  // Limit to the first 10 todos
            // Update UI
            renderTodos();
        })
        .catch(error => console.error('Error fetching todos:', error));
}

// Function to add a new todo item (POST)
function addTodo(task) {
    const newTodo = { title: task, completed: false };

    fetch(`${todosAPI}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
    })
    .then(response => response.json())
    .then(data => {
        // Change local state
        todos.push(data);
        // Update UI
        renderTodos();
    })
    .catch(error => console.error('Error adding todo:', error));
}

// Function to toggle the completion status of a todo item (PUT)
function toggleTodoCompletion(index) {
    const todo = todos[index];

    // Toggle completed prop:
    todo.completed = !todo.completed;

    fetch(`${todosAPI}/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    })
    .then(response => response.json())
    .then(data => {
        // Change local state
        todos[index] = data;
        // Update UI
        renderTodos();
    })
    .catch(error => console.error('Error updating todo:', error));
}

// Function to delete a todo item (DELETE)
function deleteTodo(index) {
    const todo = todos[index];

    fetch(`${todosAPI}/${todo.id}`, {
        method: 'DELETE',
    })
    .then(() => {
        // Change local state
        todos.splice(index, 1);
        // Update UI
        renderTodos();
    })
    .catch(error => console.error('Error deleting todo:', error));
}

// Function to update the UI
function renderTodos() {
    console.dir(todos);
    todoList.innerHTML = '';

    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        const index = i;

        const listItem = document.createElement('li');
        listItem.className = 'todo-item';
        listItem.innerHTML = todo.completed
            ? `<span class="completed">${todo.title}</span>`
            : `<span>${todo.title}</span>`;
        listItem.dataset.index = index;

        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn';
        completeBtn.textContent = todo.completed ? 'Undo' : 'Complete';

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';

        listItem.appendChild(completeBtn);
        listItem.appendChild(deleteBtn);
        todoList.appendChild(listItem);

        completeBtn.addEventListener('click', function () {
            toggleTodoCompletion(index);
        });

        deleteBtn.addEventListener('click', function () {
            deleteTodo(index);
        });
    }
}


// Get DOM elements
const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

// Add a click event listener to the add todo button
addTodoButton.addEventListener('click', () => {
    const todoInputValue = todoInput.value;

    if (todoInputValue.trim() !== '') {
        addTodo(todoInputValue);
        todoInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});

// Initialize an empty array to store todo objects
let todos = [];

// Base URL for JSON-Server
// const todosAPI = 'https://jsonplaceholder.typicode.com/todos';
const todosAPI = 'http://localhost:3000/todos';

// Fetch and render the todos on page load
fetchTodos();
