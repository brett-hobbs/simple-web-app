'use strict';

const {Component, DOM: dom} = require('react');
const classNames = require('classnames');
const classes = require('./home.less');

class Home extends Component {
  render() {
    return dom.div({}, 'Hello World');
  }
}

module.exports.Home = Home;
