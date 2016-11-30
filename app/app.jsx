var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var Main = require('Main');
import  Login  from './components/Login.jsx';

var axios = require('axios');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Load custom styles
require('style!css!sass!applicationStyles');

injectTapEventPlugin();

class  App extends React.Component{
render(){
  return(
   <MuiThemeProvider>
     <Login />
 </MuiThemeProvider>
  // <Router history={hashHistory}>
  //   <Route path="/" component={Main}>
  //     <IndexRoute component={Login}/>
  //   </Route>
  // </Router>
);
}
}

ReactDOM.render(
    <App />,
  document.getElementById("app")
);
