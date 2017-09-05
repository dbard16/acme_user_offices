const express = require('express');
const path = require('path');
const swig = require('swig');
swig.setDefaults({ cache: false });
const db = require('./db');
const bodyParser = require('body-parser')

const app = express();
const users = require('./routes/users.js');
const offices = require('./routes/offices.js');


//a


app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/source', express.static(path.join(__dirname, 'source')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let config = process.env;
try {
  config = require('./env.json');
}
catch(ex){
  console.log(ex);
}
app.use(function(req, res, next){
  res.locals.GOOGLE_API_KEY = config.GOOGLE_API_KEY;
  next();
});

//a
app.get('/', function(req, res, next){

  res.render('index');
})

app.use('/users', users);
app.use('/offices', offices);

const port = process.env.PORT || 4000;

db.sync()
  .then(function(){
    console.log('db synced');
  })
  .then(function(){
    db.seed()
  })
  .then(function(){
    console.log('db seeded');
    app.listen(port, function(){
      console.log(`listening on port ${port}`);
    })
  })

