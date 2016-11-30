var express = require('express');
//var cors = require('cors');
var app = express();

var api = require('./routes/api');

const PORT = process.env.PORT || 4000;

// app.use(cors());

// app.use(function(req, res, next){
//   if(req.headers['x-forwarded-proto'] === 'https'){
//     res.redirect('http://' + req.hostname + req.url);
//   }
//   else{
//     next();
//   }
// });

app.use(express.static('public'));

app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  next();

});

app.use('/getAuth', api);

app.listen(PORT, function(){
  console.log('Server running at port ' + PORT);
})
