//import libraries
const express = require('express');
const path = require('path');
const ejs = require('ejs');
var bodyParser = require('body-parser');    

//initialisations
const server = express();
server.set('views', path.join(__dirname, 'views'));


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

const logger = (req, res, next) => { //define middleware logger
    console.log(`Received ${req.path} request at ${new Date()}`);
    next(); // Continue to the next middleware or route handler
}

//middleware
server.use(logger); //register middleware
server.use(express.static(path.join(__dirname, 'public')));
server.use(express.urlencoded({extended: true}));
//bodyparser middleware
server.use(bodyParser.urlencoded()); //parse application/x-www-form-urlencoded to be able to process incoming requests with body data
server.use(bodyParser.json());


//home page
server.get('/', (req, res) => {
  res.render('home.ejs', {title: 'Home'});
});

//journals page -> display a list of journals
server.get('/journals', (req, res) => {
    // res.send('Journals page!'); 
    res.render('journals.ejs', {title: 'Journals', message:'Here are your journals', journals: journals});
});

//individual journal page -> display a single journal
server.get('/journals/:id', (req, res) => {
    if (req.params.id in journals){
        journal=journals[req.params.id];
        res.render('journal.ejs', {title: 'Journal', journal: journal});
    }else{
        res.render('journals.ejs', {title: 'Journals', message:'Journal is found', journals: journals});
    }
});

server.get('/add', (req, res) => {
    // res.send('Journals page!'); 
    res.render('addJournal.ejs', {title: 'Add Journal', message:'Add a new journal'});
});

server.post('/add', (req, res) => {
    journal_name=req.body['title'];
    console.log(journal_name);
    if (journal_name in journals){
        res.render('addJournal.ejs', {title: 'Add Journal', message:'Journal already exists'});
    }else{
        journals[journal_name]=req.body;
        res.redirect('/journals');
    };
    
});

server.use((req, res, next) => {  //404 page - should be at the end of all routes as it should be loaded when page is not found
    res.status(404).redirect('/html/404.html');
});

//global error handler
server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});