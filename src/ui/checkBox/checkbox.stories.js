
import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import Component from './index';
import Decorator from '../utils/stories-decorator'

export default {
  title: "CheckBox",
  decorators: [withKnobs]
};

// Knobs for React props
export const CheckBox = () => (
  <Decorator componentName="CheckBox">
    <Component disabled={boolean("Disabled", false)}>
      {text("Label", "CheckBox label")}
    </Component>
  </Decorator>
);

