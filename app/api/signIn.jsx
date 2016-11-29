var axios = require('axios');

var authOptions = {
    method: 'POST',
    url: '//api.datonis.io/api_sign_in',
    data: {
      'email': '',
      'password': ''
    },
    headers: {
      'Content-Type' : 'application/json'
    },
    json: true
};

module.exports = {
  getAuth: function(userInfo) {
      return axios(authOptions).then(function(response) {
          // console.log(response);
          return response.data.auth_token;
      }, function(err){
        return new Error(err);
      })
  }
}
