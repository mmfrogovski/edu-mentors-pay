function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var express = require('express');
var faker = require('faker');

var router = express.Router();

var question1 = {
    question: faker.random.words() + "?",
    answers: 
        {
        1: "1",
        2: "2",
        3: "3",
        4: "4"
        },
    correct_answer: getRandomInt(1,4) 
}
var question2 = {
    question: faker.random.words() + "?",
    answers: 
        {
        1: "1",
        2: "2",
        3: "3",
        4: "4"
        },
    correct_answer: getRandomInt(1,4) 
}
var question3 = {
    question: faker.random.words() + "?",
    answers: 
        {
        1: "1",
        2: "2",
        3: "3",
        4: "4"
        },
    correct_answer: getRandomInt(1,4) 
}
var question4 = {
    question: faker.random.words() + "?",
    answers: 
        {
        1: "1",
        2: "2",
        3: "3",
        4: "4"
        },
    correct_answer: getRandomInt(1,4) 
}
var question5 = {
    question: faker.random.words() + "?",
    answers: 
        {
        1: "1",
        2: "2",
        3: "3",
        4: "4"
        },
    correct_answer: getRandomInt(1,4) 
}

router.get('/', function(req, res) {
  res.send(
    [
        question1,
        question2,
        question3,
        question4,
        question5
    ]
);
});

router.get('/1', function(req, res) {
  res.send(question1);
});
router.get('/2', function(req, res) {
  res.send(question2);
});
router.get('/3', function(req, res) {
  res.send(question3);
});
router.get('/4', function(req, res) {
  res.send(question4);
});
router.get('/5', function(req, res) {
  res.send(question5);
});

module.exports = router;