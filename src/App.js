import React from "react";
import { Tabs } from "./ui";
import { Summary } from "./components";
import "./global-styles/theme.css";
import "./global-styles/reset.css";
import css from "./app.module.scss";

const data = [
  {
    title: "Summary",
    component: Summary
  },
  {
    title: "Holdings",
    component: () => <div>zalupa</div>
  }
];
const header = ['Symbol', 'Price', '% Change', 'Alerts', 'Volume', 'Abg.Vol', 'Close', 'Day Range', 'Open', 'Author Rating', 'Quant Rating', 'Sell Side Rating']

const App = () => {
  return (
    <div className={css.container}>
      <Tabs>
        {data.map(({ title, component: Component }) => (
          <Tabs.Tab title={title} key={title}>
            <Component header={header} />
          </Tabs.Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default App;
