var React = require('react');
var Axios = require('axios');
var signIn = require('signIn');
var notifications = require('notifications');

var Login = React.createClass({
  getInitialState: function(){
    return {
      AuthToken: undefined
    }
  },
  componentDidMount: function(){
    var self = this;
    signIn.getAuth().then(function(auth){
      self.setState({
        AuthToken: auth
      })
      notifications.authOptions.headers['X-Auth-Token'] = auth;
      console.log(notifications.authOptions.headers['X-Auth-Token']);
      notifications.getNotifications();
    }, function(err){

    })
  },
  render: function(){
    var {AuthToken} = this.state;


    return (
      <div>
        {AuthToken}
      </div>

    );
  }
})


module.exports = Login;
