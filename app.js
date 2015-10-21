var express     = require('express')
  , app         = express()
  , bodyParser  = require('body-parser')
  , load        = require('express-load')
  , server      = require('http').Server(app)
  , config      = require('./kanbanjs-config.json');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    next();
});

load('models', { cwd: 'app' })
    .then('controllers')
    .then('routes')
    .into(app);

app.get('*', function(req, res) {
    res.render('index', {config: config});
});

server.listen(process.env.PORT || 3000, function(){
    console.log('running kanbanjs!');
});

module.exports = app;