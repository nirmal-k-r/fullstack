const mongoose = require('mongoose');

// Replace 'mongodb://localhost:27017/mydatabasename' with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/travelapp';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
  
module.exports = mongoose; //export mongoose for use in other files