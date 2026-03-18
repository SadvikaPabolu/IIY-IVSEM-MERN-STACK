// Simple Types 
var studentId = 101;
var studentName = "Rahul";
var isPresent = true;
// Special Types 
var valueAny = "Hello";
valueAny = 123; // allowed 
var valueUnknown = "TypeScript";
// void type (used in functions) 
function displayMessage() {
    console.log("Welcome to TypeScript");
}
// null and undefined 
var emptyValue = null;
var notAssigned = undefined;
// Output 
console.log(studentId);
console.log(studentName);
console.log(isPresent);
displayMessage();
