import express from 'express';
import config from './config';
import serverRender from './serverRender';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  const initialConf = serverRender();
  res.render('index', {initialConf});
});
app.listen(config.port, function(){
  console.log('Listening on ', config.port); //eslint-disable-line
});
