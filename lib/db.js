'use strict';

var mongoose = require('mongoose');

var db = function() {
    return {
        config: function(conf) {
            console.log('in db config function............');
            console.log(conf);
            //mongoose.connect('mongodb://localhost/tekbooks');
            mongoose.connect('mongodb://' + conf.host + '/' + conf.database);
            db = mongoose.connection;
            db.on('error', console.error.bind(console,
                'connection error'));
            db.once('open', function(callback) {
                console.log('db connection open');
            });
        }
    };
};

module.exports = db();
