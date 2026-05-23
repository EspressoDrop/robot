function processTodos(data) {
    console.log(`Tasks received: ${data.todos.length}`);
}

async function fetchTodos() {
    try {
        const response = await fetch('https://dummyjson.com/todos');
        const json = await response.json();
        processTodos(json);
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

fetchTodos();
