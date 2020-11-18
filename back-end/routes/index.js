const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const server = 'mongodb://localhost:27017/portfolio';

// /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

mongoose.connect(server, { useNewUrlParser: true }, (err) => {
    if (err) throw err;
    console.log(`\nConnected to ${server}`);
});

const Schema = mongoose.Schema
 
const ContactsSchema = new Schema({
    name: String,
    email: String,
    comment: String
});

const PhotographySchema = new Schema({
    image: String,
    title: String,
    body: String
});

const DevelopmentSchema = new Schema({
    image: String,
    title: String,
    body: String
});

const Contacts = mongoose.model('Contacts', ContactsSchema);
const Photographs = mongoose.model('Photographs', PhotographySchema);
const Developments = mongoose.model('Developments', DevelopmentSchema);

// /* GET contacts page. TODO: How do I structure this for POST requests?*/
router.get('/contacts', (req, res) => {
    console.log('req', req);
    console.log('res', res);
    // Contacts.collection.insertOne()
    Contacts.insertMany(req.body, (err, data) => {
        res.json(data)
      });
        // .then(data => {
        // res.json(data);
        // });
});

router.get('/photo', (req, res) => {
    // res.render('index', { title: 'Express' });
    Photographs.find()
        .then(data => {
            res.json(data);
        });
});

router.get('/dev', (req, res) => {
    // res.render('index', { title: 'Express' });
    Developments.find()
        .then(data => {
            res.json(data);
        });
});


module.exports = router;
