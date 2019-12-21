import { configure, addDecorator} from '@storybook/react';
import "../src/global-styles/index.scss";


configure(require.context('../src/ui/', true, /\.stories\.js$/), module)
