import React from 'react'
import { render } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import {
  getByTestId,
} from '@testing-library/dom'
import Tabs from './index'


const mockTabs = [
  {
    title: 'tab1',
    component: () => <div>tab1</div>,
  },
  {
    title: 'tab2',
    component: () => <div>tab2</div>,
  },
]


test('Render Tabs Component', () => {
  const { container } = render(<Tabs />)
  expect(getByTestId(container, 'tabs-ui')).toBeTruthy()
})


test('If not children, button length equal 0', () => {
  const { container } = render(<Tabs />)
  const tabs = getByTestId(container, 'tabs-ui')
  const tabControls = tabs.querySelectorAll('button')
  expect(tabControls.length === 0).toBeTruthy()
})


test('Count tabs equal count children', () => {
const { container } = render(<Tabs>{mockTabs.map(
({title, component: Component}) => <Tabs.Tab title={title} key={title}>{Component()}</Tabs.Tab>)}</Tabs>
  )
  const tabs = getByTestId(container, 'tabs-ui')
  const tabControls = tabs.querySelectorAll('button')
  expect(tabControls.length === mockTabs.length).toBeTruthy()
})


test('Count must be not Empty', () => {
const { container } = render(<Tabs>{mockTabs.map(
({title, component: Component}) => <Tabs.Tab title={title} key={title}>{Component()}</Tabs.Tab>)}</Tabs>
  )
  const tabsContent = getByTestId(container, 'tabs-content-ui')
  expect(tabsContent).not.toBeEmpty()
})

test('Add active class to button', () => {
const { container } = render(<Tabs>{mockTabs.map(
({title, component: Component}) => <Tabs.Tab title={title} key={title}>{Component()}</Tabs.Tab>)}</Tabs>
  )
  const tabs = getByTestId(container, 'tabs-ui')
  const button = tabs.querySelector('button')
  userEvent.click(button)
  expect(button).toHaveClass('tabs__btn--active')
})
