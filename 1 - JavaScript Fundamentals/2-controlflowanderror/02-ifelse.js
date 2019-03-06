/*let weather = 75;

if(weather < 70){
    console.log("Wear a jacket.");
}
else{
    console.log("No jacket.");
}


let myName = "Joe";

if(myName == "Joe"){
    console.log("Hello my name is " + myName);
}
else{
    console.log("Hello, is your name " + myName);
}
*/

/*let name = "aUTumn";

if (name[0].toUpperCase() == name[0]) {
    console.log(name);
} else {
    console.log("Hey, its not written correctly");
}
*/
//Else If

let age = 30;

if (age >= 25) {
    console.log("Yay! You can rent a car.");
} else if (age >= 21) {
    console.log("Yay! You can drink.");
} else if (age >= 18) {
    console.log("Yay! You can vote");
} else {
    console.log("Sorry, You are too young to do anything.");
}

//Switch Staements

let friend = "Bob";

switch(friend){
    case "Autumn":
        console.log("Hey Autumn, when are you going rock climbing?");
        break;
    case "Dave":
        console.log("Hey Dave, how is Cooper");
        break;
    case "Alecx":
        console.log("Hey Alecx, when are we playing DnD?");
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`); //String interpolation, backticks instead of quotes.
}

/*
Challenge:
Using a switch case
Write a dessert variable;
If the dessert is pie, console.log 'Pie, pie, me oh my!'
If the dessert if cake, console.log 'Cake is great!'
If the dessert is ice cream, console.log 'I scream for ice cream!'
Otherwise, have your switch statement console.log 'Not on the menu.'
*/


let dessert = "Pie";

switch(dessert){
    case "Pie":
        console.log("Pie, pie, me oh my!");
        break;
    case "Cake":
        console.log("Cake is great!");
        break;
    case "Ice Cream":
        console.log("I scream for ice cream!");
        break;
    default:
    console.log(`Sorry ${dessert} is not on the menu`);
}

let yep = -8;

switch(true){
    case (yep < 0 && yep > -10):
}
