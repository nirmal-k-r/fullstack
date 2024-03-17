//function definition
function hello(name,age){
    console.log('Hello '+name);
    // age=age+1;
    console.log('He is aged '+age);
}

//main program
my_name="John";
age=30;
//hello(my_name,age);//function call
// console.log('Main program'+age);


//default parameters
function person_info(name,age,married=false){
    console.log(name+' is '+age+' years');
    if (married==true){
        console.log(name+' is married');
    }
}

person_info('John',30);
person_info('Rita',30);
person_info('Paul',30,true);