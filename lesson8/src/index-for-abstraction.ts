import { PersonalTasks, WorkTasks } from './abstraction';

const visitDoctor = new PersonalTasks(1, 'Visit doctor', false, 2, 'health', new Date('2026-07-01'));
console.log(visitDoctor.markAsCompleted());
console.log(visitDoctor.reschedule(new Date('2026-07-15')));

const buyGroceries = new PersonalTasks(2, 'Buy groceries', false, 3, 'leisure', new Date('2026-07-05'));
buyGroceries.markAsCompleted();
buyGroceries.priority = 1;
console.log(buyGroceries);

const writeChecklist = new WorkTasks(2, 'Write checklist', true, 1, 'Project 1', new Date('2026-07-10'));
console.log(writeChecklist.markAsCompleted());
console.log(writeChecklist.reschedule(new Date('2026-07-20')));
writeChecklist.markAsIncomplete();
writeChecklist.priority = 2;
console.log(writeChecklist);
