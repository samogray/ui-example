
import React from "react"
import { withKnobs, select } from "@storybook/addon-knobs"
import { withInfo } from '@storybook/addon-info'
import { jsxDecorator } from 'storybook-addon-jsx'
import Component from './index'
import Decorator from '../utils/stories-decorator'


export default {
  title: "Text",
  decorators: [jsxDecorator, withKnobs, withInfo]
}


const options = {
  caption: 'caption',
  heading: 'heading',
  subheading: 'subheading',
  display: 'display',
  base: 'base',
}

const colors = {
  skyL2: 'color-sky-l2 ',
  sky: 'color-sky',
  skyL3: 'color-sky-l3',
  inkL1: 'color-ink-l1',
  danger: 'color-danger',
  base: 'color-brand',
}

export const Tabs = () => {
  return (
  <Decorator componentName="Text">
    <Component type={select('Type', options, options.heading, 'type')} mixClassName={select('Color', colors, colors.base, 'colors')}>
      {`Text ${select('Type', options, options.heading, 'type')}`}
    </Component>
  </Decorator>
)}

