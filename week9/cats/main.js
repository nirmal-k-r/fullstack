//imports
const express = require('express');
const path = require('path');

// initialisation of objects
const server = express();//create server


const logMiddleware = (req, res, next) => {
    console.log(`Received request at ${new Date()}`);
    next(); // Continue to the next middleware or route handler if there is a next one
};
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, '/views'));


//middleware
server.use(logMiddleware);
server.use(express.static(path.join(__dirname, 'public')));  //set static directory for publicly available files

//error handling middleware
server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
    next();
});

//routes
server.get('/', (request, response) => {
//   response.send('You are on the main page');
    response.render('home.ejs');
});

server.get('/about', (request, response) => {
    // response.send('You are on the about page');
    // response.redirect('https://google.com');
    response.render('about.ejs',{
        name: 'Kitty',
        age: 15
    });
});

server.get('/products', (request, response) => {
    response.send('Products will be listed here');
});

server.get('/directions/1', (request, response) => {
    response.send('Location will be displayed here');
});

const port = 4000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

