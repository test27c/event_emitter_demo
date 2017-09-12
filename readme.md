# Event Emitter in Node
1. Look for event type, in this case we will use "greet"
2. In this example, each time "on - greet" is triggered, it will add and push the listener to the "greet" array.
3. And when "emit" is occured, loops over the "greet" array and call all the functions.

Hint: "The emitter, is taking an object of properties full of arrays of functions, and calling it events."