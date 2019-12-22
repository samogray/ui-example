import React, { useState } from "react"
import classNames from "classnames"
import PropTypes from 'prop-types'
import css from "./style.module.scss"

const Tabs = ({ children }) => {
  const [activeIndex, setActive] = useState(0);

  const getTabs = () => {
    if (React.Children.count(children) === 0) {
      return
    }
    return React.Children.map(children, (node, index) => {
      return (
        <button
          type="button"
          className={classNames(
            css.tabs__btn,
            activeIndex === index && css['tabs__btn--active']
          )}
          onClick={() => setActive(index)}
        >
          {node.props.title}
        </button>
      )
    })
  }

  const getContent = () => {
    if (React.Children.count(children) === 0) {
      return
    }
    return React.Children.toArray(children)[activeIndex].props.children;
  }

  return (
    <div className={css.tabs} data-testid="tabs-ui">
      <div className={css.tabs__controls} data-testid="tabs-controls-ui">{getTabs()}</div>
      <div className={css.tabs__content} data-testid="tabs-content-ui">{getContent()}</div>
    </div>
  )
}

const Tab = ({ children }) => children

Tabs.Tab = Tab

Tab.propTypes = {
  /** title for tab */
  title: PropTypes.string,
}

export default Tabs
