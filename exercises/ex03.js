// Create a function called removeDuplicates that removes duplicates from the stack and keeping only unique values
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require("../lib/Stack");

function removeDuplicates(stack) {
  let tempStack = new Stack();

  while (!stack.isEmpty()) {
    let removeElement = stack.pop();
    let found = false;
    let tempStorage = new Stack();

    while (!tempStack.isEmpty()) {
      let tempElement = tempStack.pop();
      if (tempElement === removeElement) {
        found = true;
      }
      tempStorage.push(tempElement);
    }

    while (!tempStorage.isEmpty()) {
      tempStack.push(tempStorage.pop());
    }

    if (!found) {
      tempStack.push(removeElement);
    }
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
}

// Create stack
const stack = new Stack();
stack.push(5);
stack.push(2);
stack.push(1);
stack.push(5);
stack.push(1);
stack.push(3);

removeDuplicates(stack);
console.log(stack.printStack()); // [5, 2, 1, 3]
