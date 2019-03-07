// For of loops

/*let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
};
for of loop will throw an error on objects
for(item of student){
    console.log(item);
}
*/

let catArray = ["tabby", "british shorthair", "burmese", "maine coon", "rag doll"];

for(cat of catArray){
    console.log(cat, "says meow");
}


let teamArray = ["Liverpool", "Galaxy", "AC Milan", "Bayern Munich"];

for(team of teamArray){
    console.log(team);
}

let letters = ["a", "b", "c", "d"];

for(letter of letters){
    console.log(letter + "....");
}













