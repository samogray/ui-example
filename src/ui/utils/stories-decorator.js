import React from 'react';
import css from './decorator.module.scss'


const StoryDecorator = ({ children, componentName}) => <div className={css.container}>
  <div className={css.container__inner}>
<h1 className={css.heading}>{`Component ${componentName}`}</h1>
    {children}
  </div>
 </div>

export default StoryDecorator
