function processTodos(data) {
    console.log(`Tasks received: ${data.todos.length}`);
}

async function fetchTodos() {
    try {
        const response = await fetch('https://dummyjson.com/faketodos');
        if (response.status >= 300) {
            throw new Error('Request failed with status ' + response.status);
        }
        const data = await response.json();
        processTodos(data);
    } catch {
        try {
            const response = await fetch('https://dummyjson.com/todos');
            if (response.status >= 300) {
                throw new Error('Request failed with status ' + response.status);
            }
            const data = await response.json();
            processTodos(data);
        } catch (error) {
            console.error('Error with both links:', error);
        }
    }
}

await fetchTodos();
