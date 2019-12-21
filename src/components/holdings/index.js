import React from "react";
import classNames from 'classnames'
import {mockData} from './mock-data'
import { Table, Text, CheckBox, Range, Label } from "../../ui";

const mapLabel = {
  'not covered': 'base',
  'very bullish': 'success',
  'bullish': 'success-secondary',
  'neutral': 'warning',
  'bearish': 'danger',
} 



const Holdings = ({header}) => {

  const rows = mockData.map(({
    symbol,
    price,
    change,
    changeRate,
    alerts,
    volume,
    avgVol,
    close,
    dayRange,
    open,
    authorRating,
    quantRating,
    sellSideRating,
}) =>[<Text tagName="span" mixClassName="color-brand" type="display">{symbol}</Text>,
      <Text tagName="span">{price}</Text>,
      <Text tagName="span" mixClassName={classNames(change > 0 ? 'color-success' : 'color-danger' )}>{change}</Text>,
      <Text tagName="span" mixClassName={classNames(changeRate > 0 ? 'color-success' : 'color-danger' )}>{changeRate}</Text>,
      <CheckBox onChange={(e) => console.log(e.target.checked)} />,
      <Text tagName="span">{volume}</Text>,
      <Text tagName="span">{avgVol}</Text>,
      <Text tagName="span">{close}</Text>,
      <Range minLabel={191.62} maxLabel={194.03} onChange={(e) => console.log(e.target.value)} />,
      <Text tagName="span">{open}</Text>,
      <Label type={mapLabel[authorRating]}>{authorRating}</Label>,
      <Label type={mapLabel[quantRating]}>{quantRating}</Label>,
      <Label type={mapLabel[sellSideRating]}>{sellSideRating}</Label>,
]
    )

  return <Table rows={rows} headers={header} rowHeaders />;
};

export default Holdings;
