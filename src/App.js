import React from "react";
import { Tabs, Text } from "./ui";
import { Summary, Holdings, QuantRating, Performance } from "./components";
import "./global-styles/index.scss";
import css from "./app.module.scss";

const tabs = [
  {
    title: "Summary",
    component: Summary,
  },
  {
    title: "Holdings",
    component: Holdings,
  },
  {
    title: "Quant Rating",
    component: QuantRating,
  },
  {
    title: "Performance",
    component: Performance,
  },
];
const header = [{title: 'Symbol', align: 'left'}, {title: 'Price', align: 'right'}, 'Change', '% Change', 'Alerts', 'Volume', 'Abg.Vol', 'Close', 'Day Range', 'Open', 'Author Rating', 'Quant Rating', 'Sell Side Rating']

const App = () => {
  return (
    <div className={css.container}>
      <Text type="heading" tagName="h1" mixClassName="color-ink-l1">Me Tech Stocks</Text>
      <Tabs>
          {tabs.map(({ title, component: Component }) => (
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
