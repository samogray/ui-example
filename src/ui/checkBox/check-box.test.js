import React, {useState} from 'react'
import { render } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import {
  getByTestId,
} from '@testing-library/dom'
import CheckBox from './index'


const Component = () => {
  const [value, setValue] = useState(true)
  return <CheckBox checked={value} onChange={() => setValue(!value)}>Checkbox</CheckBox>
}

test('Render CheckBox Component', () => {
  const { container } = render(<CheckBox>Label</CheckBox>)
  expect(getByTestId(container, 'checkbox-ui')).toBeTruthy()
});

test('Add attribute checked in to Component', () => {
  const { container } = render(<Component>Checkbox</Component>)
  const label = getByTestId(container, 'checkbox-ui')
  const input = getByTestId(container, 'checkbox-input-ui')
  userEvent.click(label);
  expect(input).toHaveAttribute('checked')
});
