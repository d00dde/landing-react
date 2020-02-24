import React, { useEffect } from 'react';
import { THEME, setCss } from '../../../THEME';
import './index.css';

export default ({ title, type}) => {
  useEffect(() => {
    const style = setCss(`

    `);
    return () => style.remove();
  });

  const classes = ['btn'];
  switch (type) {
    case 'primary': classes.push('primary');
    break;
    case 'danger': classes.push('danger');
    break;
    case 'outlined': classes.push('outlined');
    break;
    default: classes.push('secondary');
  }
  return (
    <div className={classes.join(' ')}>{title}</div>
	) 
}