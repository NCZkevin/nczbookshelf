var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  superagent = require('superagent'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var dbid = "1084336";
  var dburl = "https://api.douban.com/v2/book/" + dbid ;

  superagent.get(dburl)
    .end(function (err,sres) {
      var bookinfo = sres.text;
      var book = {
        author: sres.body.author,
        title: sres.body.tags[0].title,
        publisher: sres.body.publisher
      };
      res.render('index',{
          title:'豆瓣book',
          info:sres.body
       }
     );
    });
});

router.get('/admin', function (req, res, next) {
  var dbid = "1084336";
  var dburl = "https://api.douban.com/v2/book/" + dbid ;

  superagent.get(dburl)
    .end(function (err,sres) {
      var bookinfo = sres.text;
      var book = {
        author: sres.body.author,
        title: sres.body.tags[0].title,
        publisher: sres.body.publisher
      };
      res.render('admin/admin',{
          title:'豆瓣book',
          info:sres.body
       }
     );
    });
});

router.get('/addbook', function (req, res, next) {
  // var dbid = "1084336";
  // var dburl = "https://api.douban.com/v2/book/" + dbid ;

  // superagent.get(dburl)
  //   .end(function (err,sres) {
  //     var bookinfo = sres.text;
  //     var book = {
  //       author: sres.body.author,
  //       title: sres.body.tags[0].title,
  //       publisher: sres.body.publisher
  //     };
      res.render('admin/addbook',{
          title:'豆瓣book',
          // info:sres.body
       });
    //  );
    // });
});
