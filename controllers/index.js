'use strict';

var IndexModel = require('../models/index');
var Book = require('../models/books');

module.exports = function(router) {
    var model = new IndexModel();

    router.get('/', function(req, res) {
        Book.find({}, function(err, books) {
            if (err)
                console.error(err);

            books.forEach(function(books) {
                books.description = books.truncText(50);
            });
            var model = {
                books: books
            };
            res.render('index', model);
        });
    });
};
