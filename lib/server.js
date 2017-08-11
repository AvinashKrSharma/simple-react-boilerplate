import express from 'express';
import config from './config';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', function(req, res){
  res.render('index', {title: 'React', message: 'Advanced'});
});
app.listen(config.port, function(){
  console.log('Listening on ', config.port); //eslint-disable-line
});
