import React from "react";
import classNames from 'classnames'
import css from "./style.module.scss";

const Table = ({headers, rows, rowHeaders} )=> {
  return (
      <div className={classNames(css['table-container'], css.test)} role="group">
        <table className={css.table}>
          <tbody>
            <tr className={classNames(css.table__tr, css['table__tr--header'])}>
              {headers.map((header, index) => (
                <th
                  role="columnheader"
                  scope="col"
                  key={index}
                  className={classNames(css.table__th, css['table__th--header'])}
                >
                  {header}
                </th>
              ))}
            </tr>
            {rows.map((row, index) => (
              <tr key={index} className={css.table__tr}>
                {row.map((cell, index) =>
                  rowHeaders && index < 1 ? (
                    <th scope="row" key={index} className={css.table__th}>
                      {cell}
                    </th>
                  ) : (
                    <td key={index} className={css.table__td}>
                      {cell}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

Table.propTypes = {
 
}

export default Table;
