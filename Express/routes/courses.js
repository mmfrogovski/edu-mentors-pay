function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var express = require('express');
var faker = require('faker');

var router = express.Router();

var course1 = {
    id: getRandomInt(1,50),
    course_name: faker.random.word(),
    author: faker.name.firstName() + " " + faker.name.lastName(),
    creation_date: getRandomInt(1,30) + " " + faker.date.month() + " " + getRandomInt(2015,2018),
    rate: getRandomInt(1,5) + "/" + "5"
}
var course2 ={
    id: getRandomInt(1,50),
    course_name: faker.random.word(),
    author: faker.name.firstName() + " " + faker.name.lastName(),
    creation_date: getRandomInt(1,30) + " " + faker.date.month() + " " + getRandomInt(2015,2018),
    rate: getRandomInt(1,5) + "/" + "5" 
}
var course3 = {
    id: getRandomInt(1,50),
    course_name: faker.random.word(),
    author: faker.name.firstName() + " " + faker.name.lastName(),
    creation_date: getRandomInt(1,30) + " " + faker.date.month() + " " + getRandomInt(2015,2018),
    rate: getRandomInt(1,5) + "/" + "5" 
}


router.get('/', function(req, res) {
  res.send(
    [
        course1,
        course2,
        course3
    ]
);
});

router.get('/1', function(req, res) {
  res.send(course1);
});
router.get('/2', function(req, res) {
  res.send(course2);
});
router.get('/3', function(req, res) {
  res.send(course3);
});

module.exports = router;