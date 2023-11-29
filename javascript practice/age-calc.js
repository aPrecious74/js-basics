document.querySelector('form').addEventListener('submit', checkAge)

const license = 18;
const jrop = 16;
const rental = 25;


function checkAge(e) {
    e.preventDefault()  
    //prevents the form from loading

    let myAge = document.querySelector('input').value;
    let message = "";

    console.log('RUNNING ...' + myAge);

    if ( myAge < license && myAge >= jrop){
        message += 'you can have a JrOp license';
    }

    if ( myAge >= license){
        message +='you can have a regular license';
    }

    if (myAge >= rental) {
        message +='you can rent a car';
    }


    if (myAge < jrop) {
        message +='you are too young to drive';
    }
}
