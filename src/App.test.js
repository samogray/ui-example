import React from 'react'
import { render } from '@testing-library/react'
import {
  getByTestId,
} from '@testing-library/dom'
import App from './App'

test('Render Application Container', () => {
  const { container } = render(<App />)
  expect(getByTestId(container, 'application')).toBeTruthy()
})

test('Render Table into Application', () => {
  const { container } = render(<App />)
  expect(getByTestId(container, 'table-ui')).toBeTruthy()
})

test('Render Tabs into Application', () => {
  const { container } = render(<App />)
  expect(getByTestId(container, 'tabs-ui')).toBeTruthy()
})

test('Application render 4 tabs', () => {
  const { container } = render(<App />)
  const tabs = getByTestId(container, 'tabs-ui')
  const tabControls = tabs.querySelectorAll('button')
  expect(tabControls.length === 4).toBeTruthy()
})
