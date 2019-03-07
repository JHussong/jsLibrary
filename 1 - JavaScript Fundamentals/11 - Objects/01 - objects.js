

/**************************
OBJECTS
***********************
An object is a data type that constists of key/value pairs. 

let name = {
    (1)    (2)
  key   :   'value';
  (3)  (4)    (5)
}
1- Name of the object, how its identified
2- All of the data for an object is contained in curly braces
3- this is the name of the specific data inside the object
4- The data name and value are separated by a colon
5- The value of the data. Each key/value pairing ends with a comma 



var netflix = {
    id: 9,
    name: "Super Store",
      season1: {
        seasonInfo: {
          episodeInfo : [
            { episode: 1, episodeName: "Pilot"},
            { episode: 2, episodeName: "Magazine Profile"},
            { episode: 3, episodeName: "Shots and Salsa"},
            { episode: 4, episodeName: "Mannequin"},
            { episode: 5, episodeName: "Shoplifter"},
            { episode: 6, episodeName: "Secret Shopper"},
            { episode: 7, episodeName: "Color Wars"},
            { episode: 8, episodeName: "Wedding Day Sale"},
            { episode: 9, episodeName: "All-Nighter"},
            { episode: 10, episodeName: "Demotion"},
            { episode: 11, episodeName: "Labor"}
          ]
        }
      },
      season2: {},
      season3: {}
    };

    //console.log(netflix.name);
    //console.log(netflix.season1.seasonInfo.episodeInfo[7].episodeName);
    //console.log(netflix.season1.seasonInfo.episodeInfo[4]);
    //console.log(netflix.season1.seasonInfo.episodeInfo[4].episodeName);

    function episodeNameFinder(episodeNum){
        console.log(netflix.season1.seasonInfo.episodeInfo[episodeNum].episodeName)
    }

    episodeNameFinder(2);
*/
/*
    let spaceJam = {
        toonSquad: {
          human: 'Michael Jordan',
          rabbit1: 'Bugs Bunny',
          rabbit2: 'Lola Bunny',
          duck: 'Daffy Duck',
          tDevil: 'Tasmanian Devil',
          bird: 'Tweety',
          cat: 'Sylvester',
          pig: 'Porky Pig'
        },
        monstars: {
          0: 'Bupkus',
          1: 'Bang',
          2: 'Nawt',
          3: 'Pound',
          4: 'Blanko'
        },
        nbaPlayers: {
          phoenixSuns: 'Charles Barkley',
          newJerseyNets: 'Shawn Bradley',
          newYorkNicks: 'Patrick Ewing',
          charlotteHornets1: 'Larry Johnson',
          charlotteHornets2: 'Muggsy Bogues'
        }
      }
      
//Find keys instead of values

console.log(Object.keys(spaceJam.nbaPlayers)[0]);
console.log(Object.keys(spaceJam.toonSquad));
*/

let garden = {
    vegetable : "zucchini",
    flower : "sun flower",
    fruit : "grape",
    water : true,
    sun : true,
    size : 10
};

//find zucchini
console.log(garden.vegetable);

let x = "vegetable";

//square bracket notation
console.log(garden.x, garden[x]);


let baking ={};
baking["zucchini"] = "better make some bread!";

console.log(baking);
//console.log(baking.garden.vegetable) will not work mixing objects

console.log(baking[garden["vegetable"]]);

let key = "water";

Object.keys(garden).forEach(g => {
    if(key === g){
        console.log(garden[key]);
    }
});












