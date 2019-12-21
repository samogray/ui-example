
import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from '@storybook/addon-info';
import { jsxDecorator } from 'storybook-addon-jsx';
import Component from './index';
import Decorator from '../utils/stories-decorator'


export default {
  title: "Tabs",
  decorators: [jsxDecorator, withKnobs, withInfo]
};

export const Tabs = () => {
  return (
  <Decorator componentName="Tabs">
    <Component>
      <Component.Tab title="tab 1">
        Tab 1
      </Component.Tab>
      <Component.Tab title="tab 2">
        Tab 2
      </Component.Tab>
    </Component>,
  </Decorator>
)};

