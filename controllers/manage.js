'use strict';

var Book = require('../models/books');
var Category = require('../models/categories');

module.exports = function(router) {

    router.get('/', function(req, res) {
        res.render('admin/dashboard');
    });

    router.get('/books', function(req, res) {
        Book.find({}, function(err, books) {
            if (err){
                console.error(err);
                res.status(500).send(err);
              }
            var model = {
                books: books
            };
            res.render('admin/managebooks', model);
        });

    });

    router.get('/categories', function(req, res) {
        Category.find({}, function(err, categories) {
            if (err){
                console.error(err);
                res.status(500).send(err);
              }
            var model = {
                categories: categories
            };
            res.render('admin/managecategories', model);
        });
    });

    router.get('/addbook', function(req, res) {
        Category.find({}, function(err, categories) {
            if (err) {
                console.error(err);
                res.send(500).send(err);
            }
            var model = {
                categories: categories,
                title: 'Add Book'
            }
            res.render('admin/add_editbook', model);
        });

    });

    router.delete('/deletebooks/:id', function(req, res) {
        Book.remove({
            _id: req.params.id
        }, function(err) {
            if (err){
              console.error(err);
              res.status(500).send(err);
            }else{
              res.send({
                success: true,
                message :  'Successfully deleted the book!!'
              });
            }
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
                console.error(err);
            req.flash('success','Successfully updated details of category !!');
            res.redirect('/manage');
        });
    });


    router.delete('/deleteCategory/:id', function(req, res) {
        Category.remove({
            _id: req.params.id
        }, function(err) {
            if (err){
                console.error(err);
                res.status(500).send(err);
            }else{
                res.json({
                    success : true,
                    message : 'Successfully deleted the category !!'
                });
            }
        });
    });

    router.get('/editbooks/:id', function(req, res) {
        Book.findOne({
            _id: req.params.id
        }, function(err, book) {
            if (err) {
                console.error(err);
            }
            Category.find({}, function(err, categories) {
                if (err) {
                    console.error(err);
                    res.status(500).send(err);
                }
                var model = {
                    title: 'Edit Book',
                    book: book,
                    categories: categories
                };
                res.render('admin/add_editbook',model);
            });
        });
    });

    router.get('/editcategory/:id', function(req, res) {
        Category.findOne({
            _id: req.params.id
        }, function(err, category) {
            if (err)
                console.error(err);
            var model = {
                category: category,
                title: "Edit Category"
            };
            res.render('admin/add_editcategory', model);
        });

    });

    router.post('/editbook/:id', function(req, res) {
      var cover = null;
      if(req.body.cover){
        cover = req.body.cover;
      }else{
        cover = 'noImage.jpg';
      }
        var book = {
            title: req.body.title,
            author: req.body.author,
            publisher: req.body.publisher,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description,
            cover: cover
        };
        Book.update({
            _id: req.params.id
        }, book, function(err) {
            if (err) {
                console.errpr(err);
            }
            req.flash('success', 'Successfully updated the details of book !!');
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
      var cover = null;
      if(req.body.cover){
        console.log('cover is not empty',req.body.cover);
        cover = req.body.cover;
      }else{
        console.log('cover is empty',req.body.cover);
        cover = 'noImage.jpg';
      }
        var book = {
            title: req.body.title,
            author: req.body.author,
            publisher: req.body.publisher,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description,
            cover: cover
        };

        var newBook = new Book(book);
        newBook.save(function(err) {
            if (err) {
                console.error(err);
            }
            req.flash('success', 'Sucessfully added the book !!');
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
                console.error(err);
            }
            req.flash('success', 'Sucessfully added the category !!');
            res.redirect('/manage');

        });
    });

};
