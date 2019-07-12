const homeArr = [];
const transportArr = [];
const offspringArr = [];
const powerArr = [];

if(process.argv[2] != undefined){
    homeArr[homeArr.length] = process.argv[2];
}
if(process.argv[4] != undefined){
    powerArr[powerArr.length] = process.argv[4];
}

function mach(){
    return "You shall live in " + dwelling() + " with your " + offspring() + " offspring. Your transport will be " + transport() + " and you have been given the power of " + power() + ".";
}
function random (number){
    return Math.floor(Math.random()*number);
}
function dwelling(){
    return homeArr[random(homeArr.length)];
}
function offspring(){
return offspringArr[random(offspringArr.length)];
}
function power(){
    return powerArr[random(powerArr.length)];
}
function transport(){
    return transportArr[random(transportArr.length)];
}
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question("Enter your choice for your dwelling, strange one.", (house) => {
      console.log(`Your choice were ${house}.`)
      homeArr.push(house)
      readline.question("How many offspring would you like to have?", (childNum) => {
          console.log(`You want ${childNum} offspring.`)
          offspringArr.push(childNum);
          readline.question("How would you like to travel to places near and far, strange one?" , (travel) =>{
              console.log(`You want to travel using a ${travel}`)
              transportArr.push(travel);
              readline.question("You, strange one, will be blessed by the gods and given a power. What power would you like to have?", (powah) =>{
                  console.log(`You want to have ${powah}.`)
                  powerArr.push(powah);         
    
    console.log(mach());
    readline.close()
          })
  })
  })
  })



  
