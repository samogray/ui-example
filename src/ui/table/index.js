import React from "react";
import classNames from 'classnames'
import PropTypes from 'prop-types'
import css from "./style.module.scss";

const Table = ({headers = [], rows = [], rowHeaders = true} )=> {
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
                  className={classNames(css.table__th, css['table__th--header'], header.align && css[`table__th--${header.align}`])}
                >
                  {header.title ? header.title : header}
                </th>
              ))}
            </tr>
            {rows.map((row, index) => (
              <tr key={index} className={css.table__tr}>
                {row.map((cell, index) =>
                  rowHeaders && index < 1 ? (
                    <th scope="row" key={index} className={classNames(css.table__th, headers[index].align && css[`table__th--${headers[index].align}`])}>
                      {cell}
                    </th>
                  ) : (
                    <td key={index} className={classNames(css.table__td, headers[index].align && css[`table__td--${headers[index].align}`])}>
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
  headers: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      title: PropTypes.string,
      align: PropTypes.oneOf(['left', 'right'])
    })
  ])),
  rows: PropTypes.array,
  rowHeaders: PropTypes.bool
}

export default Table;
