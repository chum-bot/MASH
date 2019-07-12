const homeArr = ["a mansion", "an apartment", "a castle", "a house", "a world far beyond our own", "a trash can", "the hood"];
const transportArr = [
    "a supercar", "a horse-drawn carriage", "a Honda Civic", "teleportation", "walking", "a wheelchair","a nintendo labo motorcycle","a Charizard","a sparrow"];
const powerArr = ["mindbending", "remote teleportation", "telekinesis", "telepathy", "being good at fortnite", "mindreading", "being an adept coder", "godhood", "invincibility"];


if(process.argv[2] != undefined){
    homeArr[homeArr.length] = process.argv[2];
}
if(process.argv[4] != undefined){
    powerArr[powerArr.length] = process.argv[4];
}

function mach(){
    return "You shall live in " + dwelling() + " with your " + offspring() + " offspring. Your transport will be " + transport() + " and you have been given the power of " + power();
}

function random (number){
    return Math.floor(Math.random()*number);
}

function dwelling(){
    return homeArr[random(homeArr.length)];
}
function fifty50(){
    return random(11);
}
function offspring(){
    if(fifty50() == 1){
    return process.argv[3];
}
else{
    if(process.argv[3] != undefined){
    return random(10);
    }
}
}
function power(){
    return powerArr[random(powerArr.length)];
}
function transport(){
    return transportArr[random(transportArr.length)];
}
console.log(mach());

