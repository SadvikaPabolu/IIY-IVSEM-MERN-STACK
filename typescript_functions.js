// Simple Types 
var studentId = 101;
var studentName = "Manikanta";
var isPresent = true;
var marks = [85, 90, 88]; // Array 
var studentInfo = [101, "Kalyan"]; // Tuple 
// Special Types 
var valueAny = "Hello";
valueAny = 123; // Allowed 
var valueUnknown = "TypeScript";
// valueUnknown.toUpperCase(); // Error without type check 
var resultVoid;
resultVoid = undefined;
var emptyValue = null;
var notAssigned = undefined;
// Never type example
function throwError(message) {
    throw new Error(message);
}
// Output 
console.log("ID:", studentId);
console.log("Name:", studentName);
console.log("Present:", isPresent);
console.log("Marks:", marks);
console.log("Student Info:", studentInfo);
