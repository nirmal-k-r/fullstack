//loops
//i++ is the same as i=i+1
//i-- is the same as i=i-1

for (let i=0; i<5; i++ ){
    console.log('hello');
}

console.log('-------------------------');

//while loop
let i=0;
while (i<5){
    console.log('hello');
    i++;
}
console.log('-------------------------');

//for of
let names=['john','paul','jane','doe'];

for (let name of names){
    console.log(name);
};

console.log('-------------------------');

//case study
students=['john','paul','jane','doe'];
english_marks=[50,60,70,80];
maths_marks=[40,60,70,90];
science_marks=[30,60,70,100];

for (let i=0; i<students.length; i++){
    average=(english_marks[i]+maths_marks[i]+science_marks[i])/3;
    console.log(students[i]+' has an average of '+average);
}