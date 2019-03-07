/*
Arrays
************
Arrays are containers that hold lists of items

let list =  [  'item1',   'item2',    'item3'];
    (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas

console.log(typeof list);

Why is that?  The definition of an object is a container that can hold multiple datatypes.  Arrays fit under that category.

What is an array?
  Has [] brackets
  Can hold multiple datatypes
  Great for listing 
*/
/*
let list2 = ["orange", "banana", "oreos"];

console.log(list2);
console.log(typeof list2); //helps find the datatype of something
console.log(list2 instanceof Array); //helps find if object is an array, will give true or false

let students = ["Tony", "marshall", "rhys", "ray", 23, true, ["ryan", "iesha", ["randy", "trevor"], "amira"]];
//console.log(students[6][1]);
//console.log(students[6][2][1]);

let myFriend = students[6][1];

console.log(`Hello, ${myFriend}!`);
*/
/*
let food = ["pecan pie", "shrimp", "quesadilla", "cheese cake", "hotdog"];

for(let item in food){
    console.log(food[item]);
}

food.push("pizza");//adds items to the end of the array

console.log(food);

food.splice(1, 1, "bananas");//adds items but you need the index and how many to remove and what to add
console.log(food);

//food.splice(4,1,"steak");
food.splice(4,0,"steak");
console.log(food);

food.pop(); //removes last item in the array

food.forEach((food, number) => {
    console.log(number);
    console.log(food);
})
*/

let movies = ["GodFather", "Matrix", "Eraserhead"];

movies.forEach((item) =>{
    console.log(movies);
})


