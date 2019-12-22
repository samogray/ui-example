import React from 'react'
import { render, fireEvent, queryByTestId } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import {
  getByTestId,
} from '@testing-library/dom'
import Range from './index'


test('Render Range Component', () => {
  const { container } = render(<Range />)
  expect(getByTestId(container, 'range-ui')).toBeTruthy()
})


test('Render Labels in Range Component', () => {
  const { container } = render(<Range minLabel={20} maxLabel={100} />)
  const text = container.querySelectorAll('[data-testid="text-ui"]')
  expect(text.length === 2).toBeTruthy()
})

test('Focus input', () => {
  const { container } = render(<Range minLabel={20} maxLabel={100} />)
  const input = queryByTestId(container, 'range-input-ui')
  userEvent.click(input)
  fireEvent.focus(input)
  expect(input).toHaveFocus()
})
