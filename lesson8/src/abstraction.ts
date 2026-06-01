export interface ITasks  {
    id: number;
    task: string;
    completed: boolean;
    priority: number;
}

export class PersonalTasks implements ITasks {
    public id: number;
    public task: string;
    public completed: boolean;
    public priority: number;
    public area: 'health' | 'studies' | 'leisure';
    public dueDate: Date;

    public constructor(id: number, task: string, completed: boolean, priority: number, area: 'health' | 'studies' | 'leisure', dueDate: Date) {
        this.id = id;
        this.task = task;
        this.completed = completed;
        this.priority = priority;
        this.area = area;
        this.dueDate = dueDate;
    }

    public markAsCompleted(): string {
        this.completed = true;
        return 'Task marked as completed';
    }

    public markAsIncomplete(): string {
        this.completed = false;
        return 'Task marked as incomplete';
    }

    public reschedule(newDate: Date): Date {
        this.dueDate = newDate;
        return this.dueDate;
    }
}

export class WorkTasks implements ITasks {
    public id: number;
    public task: string;
    public completed: boolean;
    public priority: number;
    public project: string;
    public deadline: Date;

    public constructor(id: number, task: string, completed: boolean, priority: number, project: string, deadline: Date) {
        this.id = id;
        this.task = task;
        this.completed = completed;
        this.priority = priority;
        this.project = project;
        this.deadline = deadline;
    }

    public markAsCompleted(): string {
        this.completed = true;
        return 'Task marked as completed';
    }

    public markAsIncomplete(): string {
        this.completed = false;
        return 'Task marked as incomplete';
    }

    public reschedule(newDate: Date): Date {
        this.deadline = newDate;
        return this.deadline;
    }
}
