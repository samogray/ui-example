import React from 'react'
import { render } from '@testing-library/react'
import {
  getByTestId,
} from '@testing-library/dom'
import Table from './index'

const headers = ['Band', 'Lead vocalist', 'Year', 'Song']

const rows = [
  ["Napalm Death", "Ivo Bobul", "1981", "let it tell you the rain"],
  ["Carcass", "Pavlo Zibrov", "1985", "Maryna"],
  ["Extreme Noise Terror", "Viktor Pavlik", "1985", "Shikidym"],
  ["Discordance Axis", "Liliya Sandulessa", "1992", "Unknown song"]
]


test('Render Table Component', () => {
  const { container } = render(<Table />)
  expect(getByTestId(container, 'table-ui')).toBeTruthy()
})

test('Render Table Component', () => {
  const { container } = render(<Table />)
  expect(getByTestId(container, 'table-ui')).toBeTruthy()
})


test('Headers col count must be qual rows col count ', () => {
  const { container } = render(<Table rows={rows} headers={headers} />)
  const cellsHeader = getByTestId(container, 'table-headers-ui')
  const cellsRow = container.querySelector('[data-testid="table-rows-ui"]')
  const cells = cellsRow.querySelectorAll('td, th')
  const thHeader = cellsHeader.querySelectorAll('th')
  expect(thHeader.length === cells.length).toBeTruthy()
})
