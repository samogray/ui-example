import React from 'react'
import { render } from '@testing-library/react'
import {
  getByTestId,
} from '@testing-library/dom'
import Text from './index'

const typeValid = ['caption', 'base', 'heading', 'subheading', 'display']

test('Render Text Component', () => {
  const { container } = render(<Text />)
  expect(getByTestId(container, 'text-ui')).toBeTruthy()
});

test('Base class "text" must be into node element', () => {
  const { container } = render(<Text base="heading">Text com</Text>)
  const node = getByTestId(container, 'text-ui')
  expect(node).toHaveClass('text')
});

test('type must be from typeValid caption | base | heading | subheading | display', () => {
  render(<Text type="heading">Text com</Text>)
  const classes = document.querySelector('[data-testid="text-ui"]')
  const [classNames] = classes.getAttribute('class').split(' ').filter(item => item.includes('--'))
  expect(typeValid.includes(classNames.replace('text--', ''))).toBeTruthy()
});
