//function definition
function sayHello(){
    console.log("Hello");
}

//function call
sayHello();
sayHello();
sayHello();

console.log('-------------------------');

//function with parameters
function average(mark1,mark2){
    let avg=(mark1+mark2)/2;
    console.log('average is '+avg);
}

average(10,20);
average(30,40);

console.log('-------------------------');

//returning a value from a function

function new_average(mark1,mark2){
    let avg=(mark1+mark2)/2;
    return avg;
}

let result=new_average(30,60);
console.log('average is '+result);