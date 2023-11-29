document.querySelector('form').addEventListener('submit', checkGrade)

console.log("Welcome"); 

const A=90;
const B=89;
const BO=80;
const C=79;
const CO=70;
const D=69;
const DO=60;

function checkGrade(e) {
    e.preventDefault() 

    let myGrade = document.querySelector('input').value;
    let message = "";

    console.log('RUNNING ...' + myGrade);
   
    if ( myGrade >= A){
        message += '<li>You have an A</li>';
    }

    if ( myGrade <= B && myGrade >C){
        message +='<li>You have a B</li>';
    }

    if (myGrade <=C && myGrade > D) {
        message +='<li>You have a C</li>';
    }


    if (myGrade > DO && myGrade <=D) {
        message +='<li>You have a D</li>';
    }
    if (myGrade <=DO) {
        message +='<li>You have an F</li>';
    
    }
    
 message += '</ul>'
    document.querySelector('#output').innerHTML = message;
}
