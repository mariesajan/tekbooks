'use strict';

var Book = require('../models/books');

module.exports = function(router) {

    router.get('/', function(req, res) {
        console.log(
            'in the get of cart ..............................'
        );
        var cart = req.session.cart || {};
        var total = 0;
        var displayCart = {
            items: [],
            total: 0
        };

        for (var item in cart) {
            displayCart.items.push(cart[item]);
            total += cart[item].price * cart[item].qty;
        }

        displayCart.total = total;
        res.render('books/cart', {
            cart: displayCart
        });
    });

    router.post('/:bookid', function(req, res) {
        req.session.cart = req.session.cart || {};
        var cart = req.session.cart;
        Book.findOne({
            _id: req.params.bookid
        }, function(err, book) {
            if (err)
                console.log(err);
            if (cart[req.params.bookid]) {
                cart[req.params.bookid].qty++;
            } else {
                cart[req.params.bookid] = {
                    title: book.title,
                    price: book.price,
                    qty: 1
                };
            }
            res.redirect('/cart');
        });
    });

    router.get('/remove', function(req, res) {
        req.session.cart = 0;
        res.redirect('/cart');
    });

};
