### TekBooks

An example project as part of learning kraken, yeoman, grunt and MongoDB.

An e-commerce site which sells textbooks.

### Installation

1. Install [MongoDB](https://www.mongodb.org/downloads#production)

2. Save in MongoDB/bin/`mongobatch.bat`.

    ````
    // Replace mongoDBPath with your local MongoDB path
    mongod --directoryperdb --dbpath mongoDBPath\data\db --logpath mongoDBPath\log\mongodb.log --logappend --rest –install
    ````
3.  Run `mongobatch` and mongoDB client

    ````
    $ mongobatch
    $ mongod
    ````
4.  Run mongodb shell script

    ````
    // Setup db and collections in mongodb
    $ mongo < localPath/myscripts.js
    ````
4.  Install the generator globally

    ````
    $ npm install -g yo generator-kraken bower grunt-cli
    ````
5.  Create your project

    ````
    $ yo kraken
    // Select Template Library 'Dust' i18 Support, LESS
    ````
6.  Copy github files to appropriate folders. Refer [here](http://krakenjs.com/#structure-of-a-project)

7.  Start server
    ````
    $ npm start
    ````
8.  Open [http://localhost:8000](http://localhost:8000)


### Troubleshooting

1.  To disable csrf token, follow [this](https://github.com/krakenjs/kraken-js/issues/46)
