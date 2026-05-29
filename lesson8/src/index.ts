import { TodoClass } from './interface-class';
import { getTodos } from './functions';

const todos = await getTodos();

const leftTodos = new TodoClass(todos);

const incompleteTasks = leftTodos.getIncompleteTasks();

console.log(incompleteTasks);
