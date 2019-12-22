
import React, {useState} from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { jsxDecorator } from 'storybook-addon-jsx'
import Component from './index'
import Decorator from '../utils/stories-decorator'

export default {
  title: "CheckBox",
  decorators: [jsxDecorator, withKnobs, withInfo]
}

export const CheckBox = () => {
  const [check, toggleCheck] = useState(false)
  return (
  <Decorator componentName="CheckBox">
    <h1 style={{marginBottom: '20px'}}>{`CheckBox ${check ? 'active' : 'not active'}`}</h1>
    <Component disabled={boolean("Disabled", false)} checked={check} onChange={() => toggleCheck(!check)}>
      {text("Label", "CheckBox label")}
    </Component>
  </Decorator>
)}

