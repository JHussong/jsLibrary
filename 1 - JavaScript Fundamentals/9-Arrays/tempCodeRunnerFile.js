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