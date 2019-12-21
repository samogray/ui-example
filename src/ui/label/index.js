import React from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'
import css from './style.module.scss'

const Label = ({children, type = 'base'}) => {
  return <div className={classNames(css.label, css[`label--${type}`])}>
    {children}
  </div>
}

Label.propTypes = {
  type: PropTypes.oneOf(['success', 'success-secondary', 'base', 'warning', 'danger']),
}

export default Label

