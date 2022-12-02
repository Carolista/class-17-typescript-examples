var score = 0;
var greeting = 'Hello!';
var isReady = false;
var scores = [97, 86, 92];
var letters = ['A', 'D'];
var data = ['A', 1]; // tuple
data.push('testing 1 2 3');
data.push(15);
data.push(true);
data.push(20);
function addNums(num1, num2) {
    return num1 + num2;
}
function printBookInfo(title, author, numPages) {
    console.log("The book '" + title + "' by " + author + " has " + numPages + " pages.");
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
