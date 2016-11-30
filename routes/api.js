var express = require('express');
var router = express.Router();
var axios = require('axios');

var authOptions = {
    method: 'POST',
    url: 'https://api.datonis.io/api_sign_in',
    data: {
      'email':'blakshay93@gmail.com',
      'password':'prashant@123'
    },
    headers: {
      'Content-Type' : 'application/json'
    },
    json: true
};

router.get('/', function(req, res){
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  axios(authOptions).then(function(response){
    console.log("SUCCESS");
    res.send(response.data);
  }, function(err){
    res.send(err);
  })
});

router.get('/a', function(req, res){
  res.send({
    "Name": "Hello"
  });
});

module.exports = router;
