//array or list
names=['john','paul','jane','doe'];
// console.log(names[3]);

for (name of names){
    console.log(name);
}

//dictionaries
//allows us to store key value pairs

student={
    name:'John Doe',
    age: 21,
    subjects_taken: ['English','Maths','Science']
};

console.log(student);

console.log(student['name']);
console.log(student['age']);
console.log(student['subjects_taken']);
console.log(student['subjects_taken'][1]);

student['age']=student['age']+1;
console.log(student['age']);

for (key in student){
    console.log(key);
    console.log(student[key]);
}


journals={
    animals:{
        title: 'Animals',
        image: 'https://cms.bbcearth.com/sites/default/files/2021-02/2g24m0k80001000.png',
        description: 'This is a journal about animals'
    },
    food:{
        title: 'Food',
        image: 'https://www.eatright.org/-/media/images/eatright-landing-pages/foodgroupslp_804x482.jpg?as=0&w=967&rev=d0d1ce321d944bbe82024fff81c938e7&hash=E6474C8EFC5BE5F0DA9C32D4A797D10D',
        description: 'This is a journal about food'
    },
    travel:{
        title: 'Travel',
        image: 'https://www.miki.co.uk/sites/MikiTravelGlobal/files/slider_One_final.jpg?1709683200046',
        description: 'This is a journal about travel'
    }
};



for (key in journals){
    console.log(journals[key]['description']);
}

// if ('food' in journals){
//     console.log('key found');
// }