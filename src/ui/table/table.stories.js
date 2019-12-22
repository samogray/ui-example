
import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { jsxDecorator } from 'storybook-addon-jsx'
import Component from './index'
import Decorator from '../utils/stories-decorator'


export default {
  title: 'Table',
  decorators: [jsxDecorator, withKnobs, withInfo]
}
const headers = ['Band', 'Lead vocalist', 'Year', 'Song']

const rows = [
  ['Napalm Death', 'Ivo Bobul', '1981', 'let it tell you the rain'],
  ['Carcass', 'Pavlo Zibrov', '1985', 'Maryna'],
  ['Extreme Noise Terror', 'Viktor Pavlik', '1985', 'Shikidym'],
  ['Discordance Axis', 'Liliya Sandulessa', '1992', 'Unknown song']
]

const options = {
  center: headers,
  right: [{title: 'Band', align: 'right'}, {title: 'Lead vocalist', align: 'right'}, {title: 'Year', align: 'right'}, {title: 'Song', align: 'left'}],
  left: [{title: 'Band', align: 'left'}, {title: 'Lead vocalist', align: 'left'}, {title: 'Year', align: 'left'}, {title: 'Song', align: 'left'}],
}

export const Table = () => {
  return (
  <Decorator componentName="Table">
    <Component
      rows={rows}
      headers={select('ALign', options, options.left, 'align')}
      rowHeaders
    />
  </Decorator>
)}

