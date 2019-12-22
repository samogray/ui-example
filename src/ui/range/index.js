import React from "react"
import PropTypes from "prop-types"
import Text from "../text"
import css from "./style.module.scss"

const Range = ({
  value,
  minLabel = 1,
  maxLabel = 100,
  onChange = () => {}
}) => {
  return (
    <div className={css.range} data-testid="range-ui">
      {minLabel && (
        <Text tagName="span" type="caption" mixClassName={css.range__label}>
          {minLabel}
        </Text>
      )}
      <input
        value={value}
        type="range"
        onChange={onChange}
        className={css.range__input}
        data-testid="range-input-ui"
      />
      {maxLabel && (
        <Text tagName="span" type="caption" mixClassName={css.range__label}>
          {maxLabel}
        </Text>
      )}
    </div>
  )
}

Range.propTypes = {
  minLabel: PropTypes.number,
  maxLabel: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func
}

export default Range
