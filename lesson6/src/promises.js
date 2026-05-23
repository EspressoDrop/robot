function processTodos(data) {
    console.log(`Tasks received: ${data.todos.length}`);
}

function fetchTodos() {
    fetch('https://dummyjson.com/todos')
        .then(response => response.json())
        .then(json => {
            processTodos(json);
        })
        .catch(error => {
            console.error('Error fetching todos:', error);
        });
}

fetchTodos();
