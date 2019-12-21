import React from "react";
import { Tabs, Text } from "./ui";
import { Summary } from "./components";
import "./global-styles/index.scss";
import css from "./app.module.scss";

const data = [
  {
    title: "Summary",
    component: Summary
  },
  {
    title: "Holdings",
    component: () => <div>zalupa</div>
  },
];
const header = ['Symbol', 'Price', '% Change', 'Alerts', 'Volume', 'Abg.Vol', 'Close', 'Day Range', 'Open', 'Author Rating', 'Quant Rating', 'Sell Side Rating']

const App = () => {
  return (
    <div className={css.container}>
      <Text type="heading" tagName="h1" mixClassName="color-ink-l1">Me Tech Stocks</Text>
      <Tabs>
          {data.map(({ title, component: Component }) => (
            <Tabs.Tab title={title} key={title}>
               <div className={css.container__inner}>
                <Component header={header} />
               </div>
            </Tabs.Tab>
          ))}
      </Tabs>
    </div>
  );
};

export default App;
