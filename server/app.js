var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    people = require('./models/people.js'),
    R = require('ramda');
    
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
    
app.use(bodyParser.json());
    
app.get('/', function(req, res, next) {
    res.send('Hello space');
});

app.get('/person', function(req, res, next) {
    res.status(200).send(people);
});

app.get('/person/:id', function(req, res, next) {
   var person = getPerson(req.params.id);
   person && res.send(person) || res.sendStatus(404);
});

app.put('/person', function(req, res, next) {
    console.log(req.body);    
    
    var person = req.body;
    
    var personToUpdate = R.find(R.propEq('id', person.id), people);
    personToUpdate.firstName = person.firstName;
    personToUpdate.lastName = person.lastName;
            
    res.send(person);
    res.sendStatus(200);
    
});

app.post('/person', function(req, res, next) {
    
    var lastId = R.sortBy(R.prop('id'), people)[people.length - 1].id;
    var person = req.body;
    person.id = lastId + 1;
    people.push(person);
    
    res.send(person);
    res.sendStatus(200); 
});

app.listen(8000);
console.log("App running on localhost:8000");

function getPerson(id) {
    for(var i = 0; i < people.length; i++){
        if (people[i].id == id) {
            return people[i];
        }
    }
    
    return undefined;
}