import foods from './foods';
import { choice, remove } from './helpers';

let fruit = choice(foods);

console.log(foods);
console.log(fruit);
console.log(`I'd like some ${fruit} please`);
console.log(`Here you go ${fruit}`);
console.log(`Delicious! May I have another?`);
let remaining = remove(foods, fruit);
console.log(remaining);
console.log(`I'm sorry, we're all out. We have ${remaining.length} left`);
