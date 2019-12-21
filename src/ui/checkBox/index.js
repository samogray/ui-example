import React from "react";
import PropTypes from 'prop-types'
import css from './style.module.scss'

const CheckBox = ({children, onChange = () => {}, checked, disabled = false}) => {
  return <label className={css.checkbox}>
    <input type="checkbox" className={css.checkbox__input} onChange={onChange} checked={checked} disabled={disabled} />
    <span className={css.checkbox__decor}></span>
    {children && <span className={css.checkbox__content}>{children}</span>}
  </label>
}

CheckBox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default CheckBox

