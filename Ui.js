// 
export function renderTodos(todos) {
    const todoList = document.getElementById("todo-list");

    todoList.innerHTML = "";

    todos.forEach(todo => {
        const li = document.createElement("li");

        li.textContent = todo.text;

        if (todo.completed) {
            li.classList.add("completed");
        }

        todoList.appendChild(li);
    });
}
