const {Component, DOM: dom} = require('react');

class Home extends Component {
  render() {
    return dom.div({}, 'Hello World');
  }
}

module.exports = Home;
