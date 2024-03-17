//import libraries
const express = require('express');
const path = require('path');
const ejs = require('ejs');
var bodyParser = require('body-parser');

//import database connection
const mongoose = require("./database.js");

//import models
const Journal = require("./models/journals.js");

//initialisations
const server = express();
server.set('views', path.join(__dirname, 'views'));


//middleware to log data to the console
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
  res.render('home.ejs', {title: 'Home'});  //render home page using home.ejs templae
});

//journals page -> display a list of journals
server.get('/journals', async (req, res) => {

    journals = await Journal.find({}); //get all journals from the database

    res.render('journals.ejs', {title: 'Journals', message:'Here are your journals', journals: journals});
});

//individual journal page -> display a single journal
server.get('/journals/:id', async (req, res) => {
    // console.log(req.params.id);
    journals = await Journal.find({});
    journal = await Journal.findOne({_id: req.params.id});
    // console.log(journal);
    if (journal){
        res.render('journal.ejs', {title: 'Journal', journal: journal});
    }else{
        res.render('journals.ejs', {title: 'Journals', message:'Journal is not found', journals: journals});
    }
});

//add journal page -> display the page that has the form to add a new journal -> this does not add a journal to the list/db
server.get('/add', (req, res) => {
    // res.send('Journals page!'); 
    res.render('addJournal.ejs', {title: 'Add Journal', message:'Add a new journal'});
});


//route to add a journal to the list/db. this is a post request that receives information from the client and adds it to the list/db
server.post('/add', async(req, res) => {
    journal_name=req.body['title'];
    journal_to_find = await Journal.findOne({title: journal_name});

    if (journal_to_find){
        res.render('addJournal.ejs', {title: 'Add Journal', message:'Journal already exists'});
    }else{

        new_journal={
            title: req.body['title'],
            description: req.body['description'],
            image: req.body['image']
        }
        journal= new Journal(new_journal); //create a new journal object
        journal.save(); //save the journal object to the database collection
        res.redirect('/journals');
    };
});

//delete journal
server.get('/journals/:id/delete', async(req, res) => { 
    journals= await Journal.find({});
    console.log(req.params.id);
    await Journal.deleteOne({_id: req.params.id})
    .then(async () => { //if theres no question
        journals= await Journal.find({});
        res.render('journals.ejs', {title: 'Journals', message:'Journal has been deleted', journals: journals});
      })
      .catch((err) => { //if there is an error
        res.render('journals.ejs', {title: 'Journals', message:'Error in deletion', journals: journals});
      });
});

//edit journal -> view the update form
server.get('/journals/:id/update', async(req, res) => {
    journal= await Journal.findOne({_id: req.params.id});
    res.render('updateJournal.ejs', {title: 'Update Journal', message:'Update a journal', journal: journal});
});

//edit journal -> process the posted data (updated journal submission)
server.post('/journals/:id/update', async(req, res) => {
    Journal.updateOne(
        {_id:req.params.id},
        {$set: {
            title: req.body['title'],
            description: req.body['description'],
            image: req.body['image']
        }})
        .then(async () => { //if theres no question
            res.redirect('/journals');
          })
          .catch(async (err) => { //if there is an error
            journal= await Journal.findOne({_id: req.params.id});
            res.render('updateJournal.ejs', {title: 'Update Journal', message:'Update a journal', journal: journal});
          });
    
});

//if route is not found -> redirect 404 page
server.use((req, res, next) => {  //404 page - should be at the end of all routes as it should be loaded when page is not found
    res.status(404).redirect('/html/404.html'); //redirect user to 404 page
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