export interface TodoItem {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

export interface ApiResponse {
    todos: TodoItem[];
}

export class TodoClass {
    public allTodos: TodoItem[];
    public constructor(allTodos: TodoItem[]) {
        this.allTodos = allTodos;
    }

    public getIncompleteTasks(): string[] {
        return this.allTodos
            .filter(todo => !todo.completed)
            .map(todo => todo.todo);
    }
}
