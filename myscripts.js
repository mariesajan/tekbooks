
use tekbooks;

db.dropDatabase();

use tekbooks;

db.createCollection('books');
db.createCollection('categories');

db.books.insert({ "title" : "The Definitive Guide To MongoDB", "author" : "David Hows", "publisher" : "Apress", "price" : "100", "category" : "Database", "description" : "MongoDB ", "cover" : "mongo1.jpg", "__v" : 0 });
db.books.insert({ "title" : "MongoDB The Definitive Guide", "author" : "Michael Dirolf", "publisher" : "O Reilly", "price" : "200", "category" : "Database", "description" : "MongoDB ", "cover" : "mongo2.jpg", "__v" : 0 });
db.books.insert({ "title" : "Pentaho Analytics for MongoDB", "author" : "Bo Borland", "publisher" : "PACKT", "price" : "300", "category" : "Database", "description" : "MongoDB ", "cover" : "mongo3.jpg", "__v" : 0 });


db.categories.insert({"name" : "Database","__v" : 0});
db.categories.insert({"name" : "Frontend","__v" : 0});
db.categories.insert({"name" : "Networking","__v" : 0});
