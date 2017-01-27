var express = require('express');
var http    = require('https');
var app = express();

const apiKey = 'a88281bd9cd04d5aacc542124b4dca63';

app.use(express.static('app'));

app.get('/news/:id/:sortBy', function(req, res){

        var options = {
            host: 'newsapi.org',
            path: '/v1/articles?source='+req.params.id+'&sortBy='+req.params.sortBy+'&apiKey=' + apiKey
        };
        var self = res;

        callback = function (response) {
            var str = '';
            var str = '';
            response.on('data', function (chunk) {
                str += chunk;
            });
            response.on('end', function () {
                var parsed = JSON.parse(str);
                
                self.setHeader('Content-Type', 'application/json');
                self.send(str);
            });
        }
        http.request(options, callback).end();

});

app.listen(process.env.PORT || 5000, function(){
    console.log("Ó o Gás!!!! na porta " + process.env.PORT || 5000 + ".");
});