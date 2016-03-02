/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

// function coinCounter () {
//   // Initialize a JavaScript object to hold the coins
//   var coinPurse = {};

//   coinPurse.quarters = 0;

//   return coinPurse;
// }

// var coins = coinCounter()
// console.log();
var money = 0
 var coinPurse = {
  quarters:0,
  dimes:0,
  nickels:0,
  pennies:0
 };

function coinCounter(money) {
  money *=100;
  while(money >= 25){
    coinPurse.quarters +=1;
    money -=25; 
  }
  while(money >= 10){
    coinPurse.dimes +=1;
    money -=10; 
  }
  while(money >= 5){
    coinPurse.nickels +=1;
    money -=5; 
  }
  while(money >= 1){
    coinPurse.pennies +=1;
    money -=1; 
  }
  return coinPurse;
}

var coins = coinCounter(4.35);
console.log(coins);
document.getElementById("cp").innerHTML += "<p>The total quarters you have is</p>" + coinPurse.quarters + "<p>The total number of dimes you have is</p>"+ coinPurse.dimes + "<p>The total nickels you have is</p>"+ coinPurse.nickels + "<p>The total pennies you have is</p>"+coinPurse.pennies;















