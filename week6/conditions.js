// var temp=30.1;
// if (temp>30) {
//     console.log('it is hot. opening the windows');
// }

//if else statement
var temp=10;

if (temp>30) {
    console.log('it is hot. opening the windows');
}else{
    console.log('it is not hot. closing the windows');
}

//multiple if statements - if else if
total=4000;
if (total>5000){
    console.log('you receive 20% discount');
}else if(total>2000){
    console.log('you receive 10% discount');
}else{
    console.log('you receive no discount');
}

//nested if stattement
var username='admin';
var password='12345';

if (username=='admin'){
    if (password=='12345'){
        console.log('login successful');
    }else{
        console.log('incorrect password');
    }
}else{
    console.log('incorrect username');
}

//operators
number=10;
if (number==10){
    console.log('number is 10');
}

if (number != 10){ //not equal to 
    console.log('number is not 10');
}

if (number>=10){ //greater or equal to
    console.log('number is greater or equal to 10');
}

if (number<=10){ //less or equal to
    console.log('number is less or equal to 10');
}

temp=40;
humidity=20;
//and operator
if (temp>30 && humidity<40){
    console.log('open windows');
}else{
    console.log('close windows');
}

temp=40;
humidity=80;
ph=7;
//or operator
if (temp>30 || humidity<40 || ph>6.5){
    console.log('open windows');
}else{
    console.log('close windows');
}

