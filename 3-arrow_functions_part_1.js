/* 
 COUNT UP TO VERSION 6 OF JAVASCRIPT
─────────────────────────────────────
 ARROW FUNCTIONS, Part 1
 Exercise 3 of 9

Arrow functions are one of the most fun new features of ES6.

In this exercise, we'll focus on one of the most common usage of arrow functions: shortening very simple functions. In ES6, you can write an arrow function like:

    x => x + 1

and that means the same thing as the ES5 code:

    function (x) { return x + 1; }

Very nice, yes? You can put any expression on the right-hand side of the =>, and it will become the return value. This is especially useful when performing operations like map or filter on arrays.

Note that if you need multiple arguments, you'll need to wrap them in parentheses, like so:

    (x, y) => x + y

## Challenge

You'll be given a variable number of arguments (process.argv[2] onward) to your program, all of which will be strings. Use arrow functions to perform a map-reduce operation over them, before outputting them to the console. That is, your solution should start with something like:

    var inputs = process.argv.slice(2);
    var result = inputs.map(/* what goes here? *\/)
                        .reduce(/* what goes here? *\/);

In particular, you should:

  * Map all incoming strings to their first character
  * Reduce the result by concatenating them together

So an input of ["Hello", "arrow", "functions"] would become "Haf".

To show your work, you should output the transformation to the console. The above example would be:

    [Hello,arrow,functions] becomes "Haf"

*/ 

/* 
ERROR: 
// console.log(inputs + " becomes " + result);
// REMEMBER THE BASICS: ADDING A STRING TO AN ARRAY AUTOMATICALLY CONVERTS ARRAY TO A STRING.  

*/

var inputs = process.argv.slice(2); 
var result = inputs.map(x => x[0])
	.reduce((x, y) => x + y); 

console.log(`[${inputs}] becomes "${result}"`);

// ==> Parse error??  Would the following work in ES6???:  
// console.log(`${inputs} becomes ${result}`); 

/* 
Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   "[Teenage,Mutant,Ninja,Turtles] becomes \"TMNT\"" ==    "[Teenage,Mutant,Ninja,Turtles] becomes \"TMNT\""
   ""                                  ==    ""                                 

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected

# PASS

Your solution to ARROW FUNCTIONS, Part 1 passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var inputs = process.argv.slice(2);
    var result = inputs.map(s => s[0])
                       .reduce((soFar, s) => soFar + s);
    
    console.log(`[${inputs}] becomes "${result}"`);

────────────────────────────────────────────────────────────────────────────────

*/