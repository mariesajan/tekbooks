'use strict';

var Book = require('../models/books');
var Category = require('../models/categories');

module.exports = function(router) {

    router.get('/', function(req, res) {
        res.render('admin/dashboard');
    });

    router.get('/books', function(req, res) {
        Book.find({}, function(err, books) {
            if (err)
                console.log(err);
            var model = {
                books: books
            };
            res.render('admin/managebooks', model);
        });

    });

    router.get('/categories', function(req, res) {
        Category.find({}, function(err, categories) {
            if (err)
                console.log(err);
            var model = {
                categories: categories
            };
            res.render('admin/managecategories', model);
        });
    });

    router.get('/addbook', function(req, res) {
        Category.find({}, function(err, categories) {
            if (err) {
                console.log(err);
            }
            var model = {
                categories: categories,
                title: 'Add Book'
            }
            res.render('admin/add_editbook', model);
        });

    });

    router.delete('/deleteCategory/:id', function(req, res) {
        Category.remove({
            _id: req.params.id
        }, function(err) {
            if (err)
                console.log(err);
            req.flash('success', 'Deleted the category!!!');
            res.location('/manage/categories/');
            res.redirect('/manage/categories/');
        });
    });

    router.get('/editbooks/:id', function(req, res) {
        Book.findOne({
            _id: req.params.id
        }, function(err, book) {
            if (err) {
                console.log(err);
            }
            Category.find({}, function(err, categories) {
                if (err) {
                    console.log(err);
                }
                var model = {
                    title: 'Edit Book',
                    book: book,
                    categories: categories
                };
                res.render('admin/add_editbook',
                    model);
            });
        });

    });

    router.delete('/deletebooks/:id', function(req, res) {
        Book.remove({
            _id: req.params.id
        }, function(err) {
            if (err)
                console.log(err);
            console.log(
                'redirecting to manage/books.................'
            );
            req.flash('success', 'Deleted the book!!');
            res.location('/manage/books');
            res.redirect('/manage/books');
        });
    });



    router.get('/editcategory/:id', function(req, res) {
        Category.findOne({
            _id: req.params.id
        }, function(err, category) {
            if (err)
                console.log(err);
            var model = {
                category: category,
                title: "Edit Category"
            };
            res.render('admin/add_editcategory', model);
        });

    });

    router.post('/editcategory/:id', function(req, res) {
        var category = {
            name: req.body.categoryname
        };
        Category.update({
            _id: req.params.id
        }, category, function(err) {
            if (err)
                console.log(err);
            req.flash('Category Details Updated!!!');
            res.location('/manage');
            res.redirect('/manage');
        });
    });

    router.post('/editbook/:id', function(req, res) {
        var book = {
            title: req.body.title,
            author: req.body.author,
            publisher: req.body.publisher,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description,
            cover: req.body.cover
        };
        Book.update({
            _id: req.params.id
        }, book, function(err) {
            if (err) {
                console.log(err);
            }
            req.flash('success', 'Book Details Updated!!');
            res.redirect('/manage');
        });

    });

    router.get('/addcategory', function(req, res) {
        var model = {
            title: "Add Category"
        };
        res.render('admin/add_editcategory', model);
    });

    router.post('/addbook', function(req, res) {
        var book = {
            title: req.body.title,
            author: req.body.author,
            publisher: req.body.publisher,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description,
            cover: req.body.cover
        };

        var newBook = new Book(book);
        newBook.save(function(err) {
            if (err) {
                console.log(err);
            }
            req.flash('success', 'New book Added')
            res.redirect('/manage');

        });
    });

    router.post('/addcategory', function(req, res) {
        var category = {
            name: req.body.categoryname,
        };

        var newCategory = new Category(category); // specifying the table Category to which the data should be inserted
        newCategory.save(function(err) {
            if (err) {
                console.log(err);
            }
            req.flash('success', 'Category Added');
            res.redirect('/manage');

        });
    });

};
