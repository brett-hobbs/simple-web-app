'use strict'
const React = require('react')
const ReactDOM = require('react-dom')

function renderComponent(desc, props) {
  const container = global.document.createElement('div')
  global.document.body.appendChild(container)

  const elem = React.createElement(desc, props)
  const component = ReactDOM.render(elem, container)

  if (!component) {
    throw new Error('renderComponent did not compose child properly')
  }

  return component
}

module.exports = {
  renderComponent
}
