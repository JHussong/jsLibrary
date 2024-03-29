/*  
Var vs. Let:

Remember how, since ES6, we now have three keywords for variables: var, let, and const?

Const is pretty straight forward; it is a constant that cannot be re-expressed.

Var and let seem to operate the same, right? So why do we insist on using let excusively? Well, check out the below:

NOTE:  We have not seen functions before, we will go in depth tomorrow. WATCH, DONT CODE!
*/



let x =12; 

function letTest() {
    let x = 33; 
    if(true){
        let x =45; 
        console.log(x);
    }
    console.log(x)
}
letTest(); 
console.log(x);


var y = 55;
function scopes(){
    let y = 54;
    if(true){
        let y = 53;
        console.log(y);
    }
    console.log(y);
}
scopes();
console.log(y);

var x = 12; 

function varTest() {
    var x = 3;
    if(1 == 1){
        var x = 45;
        console.log(x);
    }
    console.log(x);
}

varTest();
console.log(x);



var x =12; 

function letTest() {
    var x = 33; 
    if(true){
        let x =45; 
        console.log(x);
    }
    console.log(x)
}
letTest(); 
console.log(x);



function constTest() {
    const scope = 1;
    if (true) {
      const scope = 2;
      console.log(scope); // 2
    }
    console.log(scope); // 1
  }
  
  constTest();


  // Hoisting

  console.log(scissors);

  scissors = "blue";

  console.log(scissors)