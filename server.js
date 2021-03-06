var express = require('express');
//var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');


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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

var api = require('./routes/api');
app.use('/api', api);

app.listen(PORT, function(){
  console.log('Server running at port ' + PORT);
})
