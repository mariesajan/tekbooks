'use strict';

var mongoose = require('mongoose');

var bookModel = function() {
    var bookSchema = mongoose.Schema({
        title: String,
        category: String,
        description: String,
        author: String,
        publisher: String,
        price: String,
        cover: String
    });
    bookSchema.methods.truncText = function(length) {
        console.log('in  the truncText function................');
        return this.description.substring(0, length);
    };
    return mongoose.model('Book', bookSchema);

};

module.exports = new bookModel();
