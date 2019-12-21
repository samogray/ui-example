import React, { useState } from "react"
import classNames from "classnames"
import css from "./style.module.scss"

const Tabs = ({ children }) => {
  const [activeIndex, setActive] = useState(0);

  const getTabs = () => {
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
    return React.Children.toArray(children)[activeIndex].props.children;
  }

  return (
    <div className={css.tabs}>
      <div className={css.tabs__controls}>{getTabs()}</div>
      <div className={css.tabs__content}>{getContent()}</div>
    </div>
  )
}

const Tab = ({ children }) => children

Tabs.Tab = Tab


export default Tabs
