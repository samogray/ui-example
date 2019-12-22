import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import css from './style.module.scss'

const Text = ({type='base', children, mixClassName = '', tagName = 'div'}) => {
  return React.createElement(
    tagName,
    {
      className: classNames(css.text, css[`text--${type}`], mixClassName),
      // eslint-disable-next-line no-useless-computed-key
      ['data-testid']: 'text-ui',
    },
    children,
  )
}

Text.propTypes = {
  type: PropTypes.oneOf(['caption', 'base', 'heading', 'subheading', 'display']),
  mixClassName: PropTypes.string,
  tagName: PropTypes.string,
}

export default Text

