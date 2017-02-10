const {jsdom} = require('jsdom');
const chai = require('chai');
const promise = require('bluebird');
const sinon = require('sinon');

global.sinon = sinon;
global.assert = chai.assert;

global.document = jsdom('<body></body>');
global.window = document.defaultView;
global.navigator = window.navigator;
global.location = window.location;
