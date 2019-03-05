/* What is a variable?  Variables are named containers for storing data values. 
  We name the variables so that we can refer to this data again.
*/
let a = 2;
let     b      =      1; 
/*(1)    (2)    (3)    (4)     
1- Keyword
2- Variable name 
3- Assignment Opperator
4- Variable value
*/

/************************
 Declarations
 ************************/

 /*
 Declarations are te LEFT SIDE of a variable
    It is simply the let x
    It is on the left side of the assignment operator (=)

Initialzations are the right side of the variable
    It sets the vale of the variable
    It incorporates the variable name (x), the assign. operator (=), and the value
*/

let x;
console.log("Declaration:", x);

x = 10;

let newVariable;
console.log(newVariable);

newVariable = 25;
console.log(newVariable);

let today = "Great";
const elevenFifty = "Wonderful!";  //The "const" keyword cannot be changed like the keyword "let" can...
console.log(today, elevenFifty);
//If you try to reassign a value to the "const" keyword, it will throw an error back at you

