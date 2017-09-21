/**
 *
 * @type {*|createApplication}
 */
var express = require('express');
var router = express.Router();

var numbers = [1, 2, 3, 4];
const fibonacciLimit = 30;

router.get('/numbers', function(req, res, next) {
    res.json(numbers);
});

router.post('/numbers', function(req, res, next) {
    var number = parseInt(req.body.number, 10);
    numbers.push(number);
    res.json(numbers)
});

router.get('/numbers/sum', function(req, res, next) {
    res.json({sum : sum(numbers)});
});


router.get('/numbers/clear', function(req, res, next) {
    numbers = [];
    res.json(numbers);
});

router.get('/numbers/fibonacci', function(req, res, next) {
    var limit = req.query.limit || fibonacciLimit;
    res.json(fibonacci(limit));
});

function sum(numbers) {
    return numbers.reduce((accumulator, number) => accumulator + number, 0);
}

function fibonacci(limit) {
    var series = [0, 1];
    if (limit < 0) {
        return null;
    } else if (limit == 0) {
        return [];
    } else if (limit == 1) {
        return [0];
    } else if (limit == 2) {
        return [0, 1];
    }

    for (var i = 2; i < limit; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}

module.exports = router;
