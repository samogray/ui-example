
import React, {useState} from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from '@storybook/addon-info';
import { jsxDecorator } from 'storybook-addon-jsx';
import Component from './index';
import Decorator from '../utils/stories-decorator'


export default {
  title: "Range",
  decorators: [jsxDecorator, withKnobs, withInfo]
};


export const Range = () => {
  const [value, setValue] = useState(20)

  const handleChange =(event)=> {
    setValue(event.target.value)
  }

  return (
  <Decorator componentName="Range">
    <h1 style={{marginBottom: '20px'}}>{`Value ${value} %`}</h1>
    <Component minLabel={191 - value} maxLabel={Number(value) + 34} value={value} onChange={handleChange} />,
  </Decorator>
)};

