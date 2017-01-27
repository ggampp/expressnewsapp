var express = require('express');
var NewsApi = require('./lib/NewsApi');
var app = express();

app.use(express.static('app'));

app.get('/news/:id/:sortBy', function(req, res){
        news = new NewsApi(res);
        news.renderNews(req.params);
});

app.get('/sources/:language/:country/:category', function(req, res){
        news = new NewsApi(res);
        news.renderSources(req.params);
});

app.listen(process.env.PORT || 5000, function(){
    console.log("Ó o Gás!!!! na porta " + process.env.PORT || 5000 + ".");
});