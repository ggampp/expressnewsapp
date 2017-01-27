var http = require('http');

const apiKey = 'a88281bd9cd04d5aacc542124b4dca63';

var NewsApi = function (res) {
    this.res = res;
};

NewsApi.prototype = {

    res: {},

    renderNews: function (params) {
        var options = {
            host: 'newsapi.org',
            path: '/v1/articles?source='+params.id+'&sortBy='+params.sortBy+'&apiKey='+ apiKey
        };
        var self = this.res;

        callback = function (response) {
            var str = '';
            response.on('data', function (chunk) {
                str += chunk;
            });
            response.on('end', function () {
                self.setHeader('Content-Type', 'application/json');
                self.send(str);
            });
        }
        http.request(options, callback).end();
    },

    renderSources: function(params){
        var options = {
            host: 'newsapi.org',
            path: '/v1/sources?language='+params.language+'&country='+params.country+'&category='+params.category+'&apiKey='+ apiKey
        };
        var self = this.res;

        callback = function (response) {
            var str = '';
            response.on('data', function (chunk) {
                str += chunk;
            });
            response.on('end', function () {
                self.setHeader('Content-Type', 'application/json');
                self.send(str);
            });
        }
        http.request(options, callback).end();
    }
};

module.exports = NewsApi;