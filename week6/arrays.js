// var mark=10;
// var mark2=20;
// var mark3=30;
// var mark4=40;
// var mark5=50;

//declaring an array
marks=[10,20,30,40,50];

console.log(marks);

//accessing an array
console.log(marks[0]);
console.log(marks[2]); //3rd element in the array
console.log(marks[4]); //5th element in the array
console.log(marks[5]); //undefined as theres not 6th element

names=['John','Doe','Jane','Doe'];
console.log(names[2]);

//defining empty array
prices=[];
console.log(prices);

//adding elements to an array
prices.push(100.50);
console.log(prices);
prices.push(200.50);
prices.push(300);
console.log(prices);

//removing elements from an array
names=['John','Paul','Jane','Doe'];
console.log(names);
names.pop();
console.log(names);


person=['john',30,true];
console.log(person);