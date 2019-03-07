/*
let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let colors = ["blue", "green", "yellow", "red", "orange", "purple"];
console.log(colors);
console.log(colors.toString());//Turns the array into a string

let newColors = colors.toString();
console.log(newcolors[2]);//This will grab the index of 2 in the newly created string

let movies = ['Phantom Menance*','Attack of the Clones','Revenge of the Sith','Solo','Rogue One','A New Hope','The Empire Strikes Back','Return of the Jedi'];

movies.push('Force Awakens');
movies.splice(3,1,'Obi Wan');

movies.forEach(f => { console.log(f); });
*/

let arr = [1, 2, 3, 4, 5];

if(arr instanceof Array === true){
    let revArr = arr.reverse()
    revArr.forEach(a => console.log(a))
}
