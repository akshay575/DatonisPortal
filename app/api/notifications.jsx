var axios = require('axios');

module.exports = {
  authOptions: {
    method: 'GET',
    url: '//api.datonis.io/api/v3/things',
    data: {

    },
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': undefined
    },
    json: true
  },
  getNotifications: function(userInfo) {
      var self = this;
      console.log(this);
      return axios(self.authOptions).then(function(response) {
          // console.log(self.authOptions);
          console.log("R:", response);
          // return response.data.auth_token;
      }, function(err){
        console.log("Error: ", self.authOptions);
        return new Error(err);
      })
  }
}
