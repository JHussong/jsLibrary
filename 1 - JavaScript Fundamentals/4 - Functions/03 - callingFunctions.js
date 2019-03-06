function hi(){
    console.log("Hi");
}

/*function (numbers){
    for(let i = 1; i <= 10; i++){
        console.log(i);
    }
}
numbers();

/*

function something(){

}



*/

let arr = ["This", "is", "really", "cool"];

function words(){
    for(word of arr){
        console.log(word)
    }
}

words();

function pet(animal){
    console.log(`I have a ${animal} for a pet.`);
}

pet("cat");

/*
function fullName(first, last){

    console.log(`Hello, my name is ${first} ${last}`); 
}

fullName("Bruce", "Wayne");
*/

function myName(fName, lName){
    let fullName = `${fName} ${lName}`;
    console.log(`Hello, my name is ${fullName}`);
}

myName("Bruce", "Wayne");

/**************************
FAT ARROW FUNCTIONS
*********************
let hi = ()   => {
      (1)     (2)
  console.log('hi')
};

1- We need to set the fat arrow function to a variable
2- We use the 'fat arrow' to signify its a function


Consice
*********************
let hi = () => console.log('hi');

Block Body
*********************
let hi = () => {
  console.log('hi')
}
*/

/*
function coffee(){
    console.log("Coffee is good.")
}
*/

let coffee = () => {
    console.log("I like coffee");
}

coffee();

let cats = (kitten, puppy) => {console.log(`I have ${kitten} cats and ${puppy} dogs`)}

cats(2, 5);

//let apples = x => console.log(`There are ${x} apples.`)

//apples(10);

/*
Returns
*/

function tipCalc(bill){
    let tip = (bill * 0.2);
    return tip.toFixed(2);
}

let totalTip = tipCalc(19.88);
console.log(totalTip);

// let tipper = bill => (bill * 0.2).toFixed(2) ------> Concise function