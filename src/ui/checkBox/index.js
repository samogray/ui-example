import React from "react"
import PropTypes from "prop-types"
import css from "./style.module.scss"

const CheckBox = ({
  children,
  onChange = () => {},
  checked,
  disabled = false
}) => {
  return (
    <label className={css.checkbox} data-testid="checkbox-ui">
      <input
        type="checkbox"
        className={css.checkbox__input}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        data-testid="checkbox-input-ui"
      />
      <span className={css.checkbox__decor}></span>
      {children && <span className={css.checkbox__content}>{children}</span>}
    </label>
  )
}

CheckBox.propTypes = {
  /** Function called when change input */
  onChange: PropTypes.func,
  /** make initial checked input */
  checked: PropTypes.bool,
  /** make disable input */
  disabled: PropTypes.bool
}

export default CheckBox
