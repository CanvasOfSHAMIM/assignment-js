//feetToMile
function feetToMile(feet){
    if (feet <= 0){
        return "Distance can't be negative!"
    } else {
        let mile = feet / 5280;
        return mile;
    }
};
let resultInMile = feetToMile(7920).toFixed(1);
console.log(resultInMile);



//woodCalcultor
function woodCalculator(Chair, Table, Bed){
    let woodChair = Chair * 1;
    let woodTable = Table * 3;
    let woodBed = Bed * 5;
    let totalWood = woodChair + woodTable + woodBed;
    return totalWood;
};
let result = woodCalculator(8, 3, 3);
console.log(result);



//brickCalculator
function brickCalculator(floorNumber){
    if (floorNumber <=10 && floorNumber >=1){
        let brickNeed = floorNumber * 15000;
        return brickNeed;
    }
    else if (floorNumber > 10 && floorNumber <= 20) {
        let brickNeed = ((floorNumber - 10) * 12000) + 150000;
        return brickNeed;
    }
    else if (floorNumber > 20){
        let brickNeed =((floorNumber - 20) * 10000) + 270000;
        return brickNeed;
    }
    else {
        return "Can't Possible Nagetive!";
    }
};
let resultOne = brickCalculator(11);
console.log(resultOne);
let resultTwo = brickCalculator(22);
console.log(resultTwo);
let resultThree = brickCalculator(33);
console.log(resultThree);
let resultFour = brickCalculator(-1);
console.log(resultFour);



//tinyFriend
function tinyFriend(friend){
    let smallName = friend[0];
    for(let i = 0; i < friends.length; i++){
        let element = friends[i];
        if (element < smallName){
            smallName = element ;
        }
    }
    return smallName;
};
let friends =["shamim", "mamun", "shomrat", "mufajjel"];
let results = tinyFriend(friends);
console.log(results);