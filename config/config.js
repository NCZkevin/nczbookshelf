var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'mybookshelf'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/mybookshelf-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'mybookshelf'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/mybookshelf-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'mybookshelf'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/mybookshelf-production'
  }
};

module.exports = config[env];
