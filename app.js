var express = require('express'),
app = express();
var cors = require('cors');


app.use(cors());

app.get('/', function(req, res){
    res.send('Ola Mundo');
  });
  app.get('/getImagem', function(req, res){
    res.sendFile('img/FANOR.png' , { root : __dirname});
  });
  app.get('/img', function(req, res){
    res.send("http://www.craceara.org.br/images/FANOR.png");
  });
  app.get('/getSql', function(req, res){
    var sql = req.param('sql');
    console.log(teste);
  });

  var server = app.listen(3000);
  console.log('Servidor Express iniciado na porta %s', server.address().port);
