import { TodoItem, ApiResponse } from './interface-class';

export async function getTodos(): Promise<TodoItem[]> {
    const response = await fetch('https://dummyjson.com/todos');
    const data: ApiResponse = await response.json();
    return data.todos;
}
