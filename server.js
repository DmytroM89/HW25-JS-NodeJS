import {Teacher} from './teacher/index.js';
import {Student} from './student/index.js';

const student = new Student('Felix', 'Lee', 20, 'male', 'Guitar, footbal, games...');
const teacher = new Teacher('Jack', 'Richer', 55, 'male', 'Guns, cars, etc.', student);

console.log(teacher.greeting());
console.log(student);