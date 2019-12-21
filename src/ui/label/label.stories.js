
import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { withInfo } from '@storybook/addon-info';
import { jsxDecorator } from 'storybook-addon-jsx';
import Component from './index';
import Decorator from '../utils/stories-decorator'


export default {
  title: "Label",
  decorators: [jsxDecorator, withKnobs, withInfo]
};


const options = {
  base: 'base',
  success: 'success',
  successSecondary: 'success-secondary',
  warning: 'warning',
  danger: 'danger',
}

export const Label = () => {
  return (
  <Decorator componentName="Label">
    <Component type={select('Type', options, options.success, 'type')}>
      {`Label ${select('Type', options, options.success, 'type')}`}
    </Component>
  </Decorator>
)};

