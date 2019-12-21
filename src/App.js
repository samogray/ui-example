import React from 'react';
import {Tabs} from './ui'
import './global-styles/theme.css'
import './global-styles/reset.css'
import css from './app.module.scss'

function App() {
  return (
    <div className={css.container}>
        <Tabs>
          <Tabs.Tab title="tab 1">tab 1</Tabs.Tab>
          <Tabs.Tab title="tab 2">
            <div className="test">tab 2</div>
          </Tabs.Tab>
      </Tabs>
    </div>
  );
}

export default App;
