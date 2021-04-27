'use strict'


let score = 0;
let login = prompt('hello tell me about your name ples:');
alert('Your Welcome ' + login );

let ask = confirm('ok' + login + ' Let\'s Play a Game! I Will Ask You and Your Answer Shuld be Yes or No Y/N');





function q1(){
    var question1 = prompt('do meet me before?');
var answer1 = question1.toUpperCase();

switch (answer1) {
    case ('YES'):
    case ('Y'):
        alert('nice to meet you '+login);
        score +=1;
        break;
    case ('NO'):
    case ('N'):
        alert('i will be happy to meet you '+login);
        break;
    default:
        alert('plese answer yes or no');
        break;    
    }
    

}
q1();

function q2(){
    var question2 = prompt('do you know my favarite color:?');
var answer2 = question2.toLowerCase();

switch (answer2) {
    case ('yes'):
    case ('y'):
        alert('Nice '+login);
        break;
    case ('no'):
    case ('n'):
        alert('my favarite color red '+login);
        score +=1;
        break;
    default:
        alert('plese answer yes or no');
        break;
}
}
q2();
function q3(){
    var question3 = prompt('Do You know my age?');
var answer3 = question3.toLowerCase();

switch (answer3) {
    case ('yes'):
    case ('y'):
        alert('i  think you know me '+ login  );
        score +=1;
        break;
    case ('no'):
    case ('n'):
        alert('i think you dont konw me '+login  );
        break;
    default:
        alert('plese answer yes or no')
        break;
}
}
q3();

function q4(){
    var question4 = prompt('Do you konw my full name?');
var answer4 = question4.toLowerCase();

switch (answer4) {
    case ('yes'):
    case ('y'):
        alert('ok nice '+login);
        break;
    case ('no'):
    case ('n'):
        alert('ok my name is mohammad kamal riziq '+login);
        score +=1;
        break;
    default:
        alert('plese answer yes or no')
        break;
}
}
q4();


function q5(){
    var question5 = prompt(' do you know my hobby? ');
var answer5 = question5.toLowerCase();

switch (answer5) {
    case ('yes'):
    case ('y'):
        alert('you are smart '+login);
        score +=1;
        break;
    case ('no'):
    case ('n'):
        alert(' my hobby is playing fotball '+login );
        break;
    default:
        alert('plese answer yes or no');
        break;
}
}
q5();

function q6(){
    var question6 = prompt('how much the jaket?');
var answer6 = question6;
var price = 17;
for (var i = 0; i < 4 ; i++) {
    if(answer6 == price){
        alert('yes '+login+' this is the price');
        score +=1;
        break;    
}else if(answer6 < price){
   answer6 = prompt('very low '+login);
}else if(answer6 > price){
    answer6 = prompt('very high '+login );
}
}
if (i >=4 ){alert(login+' the price is 17 jd');}

}

q6();
function q7(){
    
var fruit = ['panana', 'apple', 'orange'];
for (var i = 0; i < 6; i++) {
    var question7 = prompt('Which  you think I like a fruit?');
    var ff = fruit;
    if(ff == true){
        alert('nice answer '+login);
        score +=1;
        break;
    }
}
if(i >=5 )
{
  alert('No '+login+' I like panana ,apple,orange ');
  }

alert(login+' you got '+score+' out of 7');

alert('thank you' + login + ' for your time and see you soon ');
}
q7();






