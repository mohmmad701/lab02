'use strict'


let score = 0;
let login = prompt('hello enter your lovely  name please:');
alert(' Welcome ' + login);

let ask = confirm('ok ' + login + ' Let\'s Play a Game! I Will Ask You and Your Answer Shuld be \(Yes or No\) or \(Y/N\)');





function q1() {
    let question1 = prompt(' do you know who i am  ?');
    let answer1 = question1.toUpperCase();

    switch (answer1) {
        case ('YES'):
        case ('Y'):
            alert('nice to meet you ' + login);
            score += 1;
            break;
        case ('NO'):
        case ('N'):
            alert('i will be happy to meet you ' + login);
            break;
        default:
            alert('please answer yes or no');
            break;
    }


}
q1();

function q2() {
    let question2 = prompt('do you know my favarite color ?');
    let answer2 = question2.toLowerCase();

    switch (answer2) {
        case ('yes'):
        case ('y'):
            alert('Nice ' + login);
            score += 1;
            break;
        case ('no'):
        case ('n'):
            alert('my favarite color is red ' + login);

            break;
        default:
            alert('plese answer yes or no');
            break;
    }
}
q2();
function q3() {
    let question3 = prompt('Do You know my age?');
    let answer3 = question3.toLowerCase();

    switch (answer3) {
        case ('yes'):
        case ('y'):
            alert('i  think you know me ' + login);
            score += 1;
            break;
        case ('no'):
        case ('n'):
            alert('i think you dont konw me ' + login);
            break;
        default:
            alert('plese answer yes or no')
            break;
    }
}
q3();

function q4() {
    let question4 = prompt('Do you konw my full name ?');
    let answer4 = question4.toLowerCase();

    switch (answer4) {
        case ('yes'):
        case ('y'):
            alert('ok nice ' + login);
            score += 1;
            break;
        case ('no'):
        case ('n'):
            alert(' \(mohammad kamal riziq\) this is my full name  ' + login);

            break;
        default:
            alert('plese answer yes or no')
            break;
    }
}
q4();


function q5() {
    let question5 = prompt(' do you know my hobby? ');
    let answer5 = question5.toLowerCase();

    switch (answer5) {
        case ('yes'):
        case ('y'):
            alert('you are smart ' + login);
            score += 1;
            break;
        case ('no'):
        case ('n'):
            alert(' my hobby is playing football ' + login);
            break;
        default:
            alert('plese answer yes or no');
            break;
    }
}
q5();

alert(`welcome again ${login} now lets go with a new game its a quess game so be focus you have 4 tryle     `  );
function q6() {
    let  question6 = prompt('what do expect to be  messi number  in barcelona club ');
    let  answer6 = question6;
    let  num = 10;
    for (let  i = 0; i < 4; i++) {
        if (answer6 == num) {
            alert('yes ' + login + ' this is number of player great ');
            score += 1;
            break;
        } else if (answer6 < num) {
            answer6 = prompt('very low ' + login);
        } else if (answer6 > num) {
            answer6 = prompt('very high ' + login);
        }
        if (i >= 4) { alert( login + ' the number of player  is 10 to bad you dont know that  '); }
    }

}

q6();


// function q7() {


//     let  fruit = ['panana', 'apple', 'orange'];


//     let  question7  = prompt('Which  you think I like a fruit?');

//     for (let  i = 0; i < 6; i++) {

//         if (question7  == fruit[0] || question7  == fruit[1] || question7  == fruit[2]  ) {
//             alert('nice answer ' + login);
//             score += 1;
//             break;
//         }
//         else{
//             question7=prompt('try again you can make it ');
//         }
//     }
//     if (i >= 5) {

//         alert('No ' + login + ' I like panana ,apple,orange ');

//     }



// }
// q7();


// alert (login + ' you got ' + score + ' out of 7');

// alert('thank you' + login + ' for your time and see you soon ');


function q7() {

    var fruit = ['panana', 'apple', 'orange']; 
    
    for (var i = 0; i < 6; i++) { 
        
    var question7 = prompt('Which  you think I like a fruit?'); 
    
    
    
    if (question7===fruit[0]|| question7===fruit[1]|| question7===[2]) { 
        
        alert('nice answer ' + login); 
        
        score += 1; 
        
        break; }  else {
            alert('try again ');
        }
    
    
}

    alert(login + ' you got ' + score + ' out of 7');
    alert('thank you' + login + ' for your time and see you soon ');

} q7();


