var React = require('react'),
    { Link, IndexLink } = require('react-router'),

    Nav = React.createClass({

      render: function() {
        return(
          <div className="top-bar">
            <div className="top-bar-left">
              <ul className="menu">
                <li className="menu-text">
                  LOGO Here
                </li>
                <li>
                  <IndexLink to="/"
                    activeClassName="active"
                    activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
                </li>
                <li>
                  <IndexLink to="/about"
                    activeClassName="active"
                    activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
                </li>
              </ul>
            </div>
          </div>
        );
      }
    });

module.exports = Nav;
