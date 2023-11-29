document.querySelector('form').addEventListener('submit', checkGrade)

console.log("Welcome");

let grade= 81; 

const A=90;
const B=89;
const C=79;
const D=69;
const F=60;

function checkGrade(e) {
    e.preventDefault() 

    let myGrade = document.querySelector('input').value;
    console.log('RUNNING ...' + myGrade);
    if ( myGrade >= A){
        console.log('You have an A');
    }

    if ( myGrade < A && myGrade >= B){
        console.log('You have a B');
    }

    if (myGrade < B && myGrade >= C) {
        console.log('You have a C');
    }


    if (myGrade < C && myGrade >= D) {
        console.log('you have a D');
    }
    if (myGrade < D && myGrade >= F) {
        console.log('you have an F');
    }
}
