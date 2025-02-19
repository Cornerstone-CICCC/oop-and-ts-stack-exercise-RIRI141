// Create a function called lowercaseStrings that converts all strings in the stack to lowercase
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require("../lib/Stack");

function lowercaseStrings(stack) {
  // your code here
  let tempStack = new Stack();
  while (!stack.isEmpty()) {
    let removedStr = stack.pop();
    if (typeof removedStr === "string") {
      tempStack.push(removedStr.toLowerCase());
    }
  }
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
}

// Create stack
const stack = new Stack();
stack.push("Hello");
stack.push("woRLd");
stack.push("good");
stack.push("MORNING");

lowercaseStrings(stack);
console.log(stack.printStack()); // ["hello", "world", "good", "morning"]
