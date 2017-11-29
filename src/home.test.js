import testHelper from '../test/helper'
import { Home } from './home'
import ReactDOM from 'react-dom'

let instance

beforeEach(() => {
  instance = testHelper.renderComponent(Home, {})
})

test('loads successfully', () => {
  expect(instance)
})

test('renders expected text', () => {
  const node = ReactDOM.findDOMNode(instance)
  expect(node.textContent).toBe('Hello World')
})
