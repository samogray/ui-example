import { addParameters, configure, addDecorator} from '@storybook/react';
import "../src/global-styles/index.scss";

import options from './options'

// Option defaults:
addParameters({options: options})

configure(require.context('../src/ui/', true, /\.stories\.js$/), module)
