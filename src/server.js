const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const indexRoutes = require('./routes/routes.js');

const app = express();

//settins
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use('/',indexRoutes);
app.use('/public',express.static(__dirname + '/public'));

app.listen(app.get('port'),()=>{
  console.log(`Server on port: localhost:${app.get('port')}`);
});
