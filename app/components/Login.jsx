var React = require('react');
var Axios = require('axios');
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
var axios = require('axios');

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

var Login = React.createClass({
    onLogin: function(e) {
      e.preventDefault();
      console.log(e.target.value);
      var data={
        email: this.refs.email.getValue(),
        password: this.refs.password.getValue()
      };
      console.log(data);
      axios.post('/api/getAuth', data).then(function(data){
        console.log('Success');
        // var s=data;
      }, function(err){
        // var s=err;
        console.log(err);
      })
    },
    render: function() {
        return (
            <div>
                <div>
                    <AppBar title="Datonis Project" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                </div>
                <form onSubmit={this.onLogin}>
                    <div>
                        <TextField hintText="Email" ref="email" style={{
                            margin: '5px 0px 0px 400px'
                        }}/>
                    </div>
                    <div>
                        <TextField hintText="Password" ref="password" style={{
                            margin: '5px 0px 0px 400px'
                        }}/>
                    </div>
                    <div>
<button>Submit</button>
                    </div>
                </form>
            </div>

        );
    }
})

module.exports = Login;
