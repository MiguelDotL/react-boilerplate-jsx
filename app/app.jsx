var React = require('react'),
    ReactDOM = require('react-dom'),
    { Route, Router, IndexRoute, hashHistory } = require('react-router'),

    Main = require('Main'),
    About = require('About');


require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// require('style!css!../app/styles/style.css')
require('style!css!sass!styles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      {/* <Route path="about" component={About} /> */}
    </Route>
  </Router>,
  document.getElementById('app')
);
