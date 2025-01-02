// Function to add a new todo item
function addTodo(task) {
    todos.push({ task: task, completed: false });
    renderTodos();
}

// Function to toggle the completion status of a todo item
function toggleTodoCompletion(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

// Function to delete a todo item
function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

// Function to render the todo list
function renderTodos() {
    console.dir(todos);
    // Clear the current list
    dom.todoList.innerHTML = '';

    // Iterate over the todos array and create list items for each todo
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        const index = i;

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.className = 'todo-item';
        if (todo.completed) {
            listItem.innerHTML = `<span class="completed">${todo.task}</span>`
        }else{
            listItem.innerHTML = `<span>${todo.task}</span>`
        }
        listItem.dataset.index = index; // Set dataset index for identification

        // Create the complete button
        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn';
        completeBtn.textContent = todo.completed ? 'Undo' : 'Complete';

        // Create the delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';

        // Append buttons to the list item
        listItem.appendChild(completeBtn);
        listItem.appendChild(deleteBtn);

        // Append the list item to the todo list
        dom.todoList.appendChild(listItem);

        // Event listener to toggle completed status
        completeBtn.addEventListener('click', function (event) {
            toggleTodoCompletion(index);
        });

        // Event listener to delete the todo
        deleteBtn.addEventListener('click', function (event) {
            deleteTodo(index);
        });
    }
}

// Function to render the todo list
function renderTodos() {
    console.dir(todos);
    // Clear the current list
    dom.todoList.innerHTML = '';

    // Iterate over the todos array and create list items for each todo
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        const index = i;

        listItemHTML = `
            <li class="todo-item" data-index="${index}">
                <span ${todo.completed?'class="completed"':''}>${todo.task}</span>
                <button class="complete-btn">${todo.completed ? 'Undo' : 'Complete'}</button>
                <button class="delete-btn">Delete</button>
            </li>
        `

        dom.todoList.innerHTML += listItemHTML;

        dom.completeBtn = document.querySelector('.complete-btn');
        dom.deleteBtn = document.querySelector('.delete-btn');

        // Event listener to toggle completed status
        dom.completeBtn.addEventListener('click', function (event) {
            toggleTodoCompletion(index);
        });

        // Event listener to delete the todo
        dom.deleteBtn.addEventListener('click', function (event) {
            deleteTodo(index);
        });
    }
}


// Get DOM elements
const dom = {
    todoInput : document.getElementById('todo-input'),
    addTodoButton : document.getElementById('add-todo'),
    todoList : document.getElementById('todo-list'),
}

// Add a click event listener to the add todo button
dom.addTodoButton.addEventListener('click', () => {
    const todoInputValue = dom.todoInput.value;

    if (todoInputValue.trim() !== '') {
        addTodo(todoInputValue);
        dom.todoInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});

// Initialize an empty array to store todo objects
let todos = [];

// Initial render
renderTodos();
