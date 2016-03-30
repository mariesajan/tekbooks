'use strict';

var Book = require('../models/books');


module.exports = function(router) {

    router.get('/about', function(req, res) {
        res.render('books/about');
    });

    router.get('/details/:id', function(req, res) {
        Book.findOne({
            _id: req.params.id
        }, function(err, books) {
            if (err) {
                console.error(err);
            }
            var model = {
                books: books
            };
            res.render('books/details', model);
        });

    });
};
