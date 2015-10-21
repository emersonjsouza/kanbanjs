var express     = require('express')
  , app         = express()
  , bodyParser  = require('body-parser')
  , load        = require('express-load')
  , server      = require('http').Server(app)
  , multer      = require('multer');


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

load('models', { cwd: 'app' })
  .then('controllers')
  .then('routes')
  .into(app);

var port = Number(process.env.PORT || 3000);

server.listen(port, function(){
  console.log('running ehcarro painel on port ' + port);
});

module.exports = app;