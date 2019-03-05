function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();


pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

function numberEntered(x){
    console.log("The number you entered was: ", x)
}

numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);

function addAnyTwoNumbers(x,y){
    console.log(x + y);
}

addAnyTwoNumbers(4,5);
addAnyTwoNumbers(6,11);
addAnyTwoNumbers(7,8);

function subtractTwoNumbers(firstNum,secondNum){
    console.log(secondNum-firstNum);
}

subtractTwoNumbers(5,7);


function getMyTaxReturnAndDoMyTaxesAndStuff(a, x, y, z){
    let myInc = a * x;
    let myTaxes = myInc - y;
    let total = myTaxes + z;
    return total; 
}




function addition(x, y){
    let sum = x + y;
    return sum;
}




function myName(first, last){
    var wholeName = first + " " + last;
    console.log(myName);
    return wholeName;
}


function petNameAndBreed(name, breed){
    var petDetails = name + ", " + breed;
    console.log(petDetails);
    return petDetails;
}



function itemTax(quantity, price){
    var tax = 0.07;
    var totalTax = quantity * price * tax;
    var totalPrice = totalTax + (quantity * price);
    console.log(totalPrice);
    return totalPrice
}