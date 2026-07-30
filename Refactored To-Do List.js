const STORAGE_KEY = "todos";

// Load todos from storage on startup
function loadTodos() {
    return getFromStorage(STORAGE_KEY, []);
}

// Save todos whenever they change
function saveTodos(todos) {
    saveToStorage(STORAGE_KEY, todos);
}

// Updated addTodo function
function addTodo(text) {
    const newTodo = {
        id: Date.now(),  // Simple unique ID
        text: text,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    const todos = loadTodos();
    todos.push(newTodo);
    saveTodos(todos);
    
    renderTodos();
}

// Updated toggleTodo
function toggleTodo(id) {
    const todos = loadTodos();
    const todo = todos.find(t => t.id === id);
    
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos(todos);
        renderTodos();
    }
}

// Updated deleteTodo
function deleteTodo(id) {
    let todos = loadTodos();
    todos = todos.filter(t => t.id !== id);
    saveTodos(todos);
    renderTodos();
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    renderTodos();
});
