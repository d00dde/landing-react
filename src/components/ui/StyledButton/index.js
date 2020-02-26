import React, { useEffect } from 'react';
import { THEME, setCss } from '../../../THEME';
import './index.css';

export default ({ title, type, onClick}) => {
  useEffect(() => {
    const style = setCss(`
      .btn.primary,
      .btn.secondary {
        background-color: ${THEME.MAIN_COLOR};
      }
      .btn.primary:hover,
      .btn.secondary:hover,
      .btn.outlined:hover {
        background-color: ${THEME.NAV_HOVER_COLOR};
      }
      .btn.outlined {
        background-color: transparent;
        border: 3px solid ${THEME.BACKGROUND_COLOR};
      }
      .btn.danger {
        background-color: ${THEME.DANGER_COLOR};
      }
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
    case 'disabled': classes.push('disabled');
    break;
    default: classes.push('secondary');
  }
  return (
    <div 
      className={classes.join(' ')}
      onClick={classes.includes('disabled') ? null : onClick || null}
    >
      {title}
    </div>
	) 
}