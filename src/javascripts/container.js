const React = require("react");
const Header = require("javascripts/header");
const Footer = require("javascripts/footer");

require("stylesheets/modules/container");

const Container = React.createClass({
  render () {
    return (
      <div className="container">
        <Header />
        <Footer />
      </div>
    );
  }
});

module.exports = Container;
