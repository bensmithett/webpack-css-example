const React = require("react");

require("stylesheets/modules/header");
require("stylesheets/utilities/clearfix");

const Header = React.createClass({
  render () {
    return (
      <div className="header u-clearfix">
        Header
      </div>
    );
  }
});

module.exports = Header;
