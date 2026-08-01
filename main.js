// main.js - module entry that wires existing modules
import { load as loadFromStorage, save as saveToStorage } from './Storage.js';
import { renderTodos as renderUI } from './Ui.js';
import { generateId } from './Utils.js';

const STORAGE_KEY = 'todos_v1';

function loadTodos() {
  return loadFromStorage(STORAGE_KEY, []);
}

function saveTodos(todos) {
  saveToStorage(STORAGE_KEY, todos);
}

function renderTodos() {
  const todos = loadTodos();
  renderUI(todos);
}

function addTodo(text) {
  const todos = loadTodos();
  todos.push({ id: generateId(), text, completed: false });
  saveTodos(todos);
  renderTodos();
}

function toggleTodo(id) {
  const todos = loadTodos();
  const t = todos.find(x => String(x.id) === String(id));
  if (t) {
    t.completed = !t.completed;
    saveTodos(todos);
    renderTodos();
  }
}

function deleteTodo(id) {
  let todos = loadTodos();
  todos = todos.filter(x => String(x.id) !== String(id));
  saveTodos(todos);
  renderTodos();
}

// wire DOM events
document.addEventListener('DOMContentLoaded', () => {
  renderTodos();

  document.getElementById('todo-form').addEventListener('submit', e => {
    e.preventDefault();
    const input = document.getElementById('todo-input');
    const v = input.value.trim();
    if (v) {
      addTodo(v);
      input.value = '';
      input.focus();
    }
  });

  document.getElementById('todo-list').addEventListener('click', e => {
    const li = e.target.closest('li');
    if (!li) return;
    const id = li.dataset.id;
    if (e.target.classList.contains('toggle')) toggleTodo(id);
    if (e.target.classList.contains('delete')) deleteTodo(id);
  });
});
