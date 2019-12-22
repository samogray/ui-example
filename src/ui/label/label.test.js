import React from 'react'
import { render } from '@testing-library/react'
import {
  getByTestId,
} from '@testing-library/dom'
import Label from './index'

const typeValid = ['success', 'success-secondary', 'base', 'warning', 'danger']

test('Render Label Component', () => {
  const { container } = render(<Label>Label</Label>)
  expect(getByTestId(container, 'label-ui')).toBeTruthy()
})

test('type must be from typeValid success | success-secondary | base | warning | danger', () => {
  render(<Label type="success">Label</Label>)
  const classes = document.querySelector('[data-testid="label-ui"]')
  const [classNames] = classes.getAttribute('class').split(' ').filter(item => item.includes('--'))
  expect(typeValid.includes(classNames.replace('label--', ''))).toBeTruthy()
})
