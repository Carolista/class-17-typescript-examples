let score: number = 0;
const greeting: string = 'Hello!';
let isReady: boolean = false;

let scores: number[] = [97, 86, 92];
let letters: string[] = ['A', 'D'];
let data: [string, number, boolean] = ['A', 1, true];

function addNums(num1: number, num2: number): number {
  return num1 + num2;
}
function printBookInfo(title: string, author: string, numPages: number): void {
  console.log(`The book '${title}' by ${author} has ${numPages} pages.`);
}

console.log(score);
console.log(greeting);
console.log(isReady);
console.log(scores);
console.log(letters);
console.log(data);
console.log(addNums(2, 5));
printBookInfo('The Hill We Climb', 'Amanda Gorman', 29);

// TODO: compile this TS file and run the resulting JS file with node
