document.querySelector('form');

const license = 18;
const jrop = 16;
const rental = 25;


function checkAge( myAge) {
    console.log('RUNNING ...' + myAge);
    if ( myAge < license && myAge >= jrop){
        console.log('you can have a JrOp license');
    }

    if ( myAge >= license){
        console.log('you can have a regular license');
    }

    if (myAge >= rental) {
        console.log('you can rent a car');
    }


    if (myAge < jrop) {
        console.log('you are too young to drive');
    }
}
