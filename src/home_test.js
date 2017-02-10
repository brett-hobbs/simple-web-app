'use strict';
const testHelper = require('../test/helper');
const Home = require('./home');
const ReactDOM = require('react-dom');

describe('Home page', () => {
  let instance;

  beforeEach(() => {
    instance = testHelper.renderComponent(Home, {});
  });

  it('loads successfully', () => {
    assert(instance);
  });

  it('renders expected text', () => {
    const node = ReactDOM.findDOMNode(instance);
    assert.equal(node.textContent, 'Hello World');
  });
});

