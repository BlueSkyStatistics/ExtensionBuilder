const express = require('express');
const path = require('path');

//MongoDB
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '')));

// Define a route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'index.html'));
});

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/sessions', {
    useNewUrlParser: true,
  
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Configure session middleware - MongoDB
app.use(session({
    secret: 'your-secret-key',  // Replace with your own secret key
    resave: false,  // Forces the session to be saved back to the session store
    saveUninitialized: true,  // Forces a session that is "uninitialized" to be saved to the store
    store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/sessions' }),  // Connect-Mongo as the session store
    cookie: { maxAge: 1000 * 60 * 60 * 24 }  // Cookie expiration: 1 day
  }));

app.get('/api/info', (req, res) => {
    // const info = [{
    //     name: 'Aiden!',
    //     id: '123'
    // }, {
    //     name: 'ian',
    //     id: '00'
    // }];
    const info = ['testInfo'];
    res.send(info);
});

// Simple route to demonstrate session persistence - MongoDB
// app.get('/', (req, res) => {
//     // if (req.session.views) {
//     //   req.session.views++;
//     // } else {
//     //   req.session.views = 1;
//     // }
//     // const infotest = [`You have viewed this page ${req.session.views} times`];
//     const info = ['testInfoText']
//     res.send(info);
//   });

app.post('/data', (req, res) => {
    const info = req.body;
    console.log("request: ", req);
    console.log('got data!!: ', info); // logs to vsCode console
    //console.log(`Received data: Name - ${name}, Email - ${email}`);
  
  // You can send a response back to the front end
  res.status(200).json({ message: 'Data received successfully' });
});

//Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});