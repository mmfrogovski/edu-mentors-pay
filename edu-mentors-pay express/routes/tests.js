var express = require('express');
var faker = require('faker');

var router = express.Router();

router.get('/', function(req, res) {
  res.send([
{
    "question": "?",
    "answers": 
        {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4"
        },
    "correct_answer": "4"
},
{
    "question": "??",
    "answers": 
        {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4"
        },
    "correct_answer": "3"
},
{
    "question": "???",
    "answers": 
        {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4"
        },
    "correct_answer": "2"
},
{
    "question": "????",
    "answers": 
        {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4"
        },
    "correct_answer": "2"
},
{
    "question": "?????",
    "answers": 
        {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4"
        },
    "correct_answer": "1"
}
]);
});

router.get('/:id', function(req, res) {
  res.send({ id: req.params.username,
             question: faker.random.words(),
             correct_answer: faker.random.number(),
             format: req.query.details});
});


module.exports = router;