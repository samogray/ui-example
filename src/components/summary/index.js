import React from "react";
import { Table, Text, CheckBox, Range } from "../../ui";

const Summary = ({header}) => {
  const rows = [
    [<Text tagName="span" type="caption">zalupa</Text>,
    <Range minLabel={191.62} maxLabel={194.03} onChange={(e) => console.log(e.target.value)} />,
    "1981",
    <CheckBox onChange={(e, value='value') => console.log(e.target.checked, value)} />
  ],
    ["Carcass", "Павло Зібров", "1985", "Sony"],
    ["Extreme Noise Terror", "Віктор Павлік", "1985", "WB"],
    ["Discordance Axis", "Лілія Сандулеса", "1992", "СоюзМультфільм"]
  ];
  return <Table rows={rows} headers={header} rowHeaders />;
};

export default Summary;
