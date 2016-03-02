'use strict';

var Book = require('../models/books');


module.exports = function(router) {

    router.get('/about', function(req, res) {
        res.render('books/about');
    });

    router.get('/details/:id', function(req, res) {
        console.log('in book deatils page ...................' +
            req.params.id);
        Book.findOne({
            _id: req.params.id
        }, function(err, books) {
            if (err) {
                console.log(err);
            }
            console.log('books found..........');
            console.log(books);

            var model = {
                books: books
            };
            res.render('books/details', model);
        });

    });
};
