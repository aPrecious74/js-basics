console.log("Hello World");
// var x = 5; is the old way to make a variable
let y = 6 ;
y=10;   //you can change the value

const z = 7;    //this is a constant. can't be changed
// z=10;    //this "throws an error"

console.log(y,z);
console.log(y+z);
console.log(y*z);
console.log(y/z);
console.log(y%z);
console.log(y-z);    //does the division but returns the remainder. Called modules
console.log(y**z);  //exponents

let fname="Precious ";
let lname="Agyei";
console.log(fname + lname);
console.log(fname + " " + lname);   //different ways to add a space in between the words
//console.log('${ fname } ${ lname }'); also works

console.log(lname + 6);


let user = "precious";
let pass = "yay";

if(user == "precious") {    //== means an assignment opperator. if this is true...
    console.log('you are ' + user);
}
    user="pre";
if(user == "precious") {
    console.log('you are ' + user);
}   else {
    console.error("DENIED");
}

user="precious ";
if(user=="precious " && pass == "yay") {   
        console.log('you are ' + user + 'and your pass is' + " " + pass);
    }   else {
        console.error("DENIED");
    }

const license = 18;
const jrop = 16;
const rental = 25;

let myAge=15


function checkAge( myAge) {
    console.log('RUNNING ...' + myAge);
    if ( myAge < license && myAge >= jrop){
        console.log('you can have a JrOp license')
    }

    if ( myAge >= license){
        console.log('you can have a regular license')
    }

    if (myAge >= rental) {
        console.log('you can rent a car')
    }


    if (myAge < jrop) {
        console.log('you are too young to drive')
    }
}

checkAge(6);
checkAge(17);
checkAge(37);
checkAge(50);
checkAge(1);