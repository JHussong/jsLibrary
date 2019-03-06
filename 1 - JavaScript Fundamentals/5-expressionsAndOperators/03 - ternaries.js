//What is a ternary? A great way to write a single line if/ifelse statement.

let w = 6;

//Ternary:

(w > 0) ? console.log("Yes") : console.log("No");

//Instead of:

if(w > 0){
    console.log("Yes");
}else{
    console.log("No.");
}

if(w == 0){
    console.log("Hey, Hey, Hey");
}else if (w < 0){
    console.log("Nah, Nah");
}else{
    console.log("Later.");
}


(w == 0) ? console.log("Hey") : (w < 0) ? console.log("Nah.") : console.log("Later.");

let age = 30;

(age >= 25) ? console.log("You can rent a car.") : (age >= 21) ? console.log("You can drink.") : (age >= 18) ? console.log("You can vote.") : console.log("Too young for anything.")