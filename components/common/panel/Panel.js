import React from 'react';
import PropTypes from 'prop-types';
import useBreakpoints from '../../../framework/useBreakpoints';
import styles from './panel.module.scss';
/**
 * Container Component, showing children in a panel
 */
function Panel({ children, classNames }) {
  const isMobile = useBreakpoints();
  const rootClass = `${styles.panel} ${classNames} ${
    isMobile && styles.isMobile
  }`;
  return <div className={rootClass}>{children}</div>;
}
Panel.propTypes = {
  children: PropTypes.node,
  classNames: PropTypes.string,
};
Panel.defaultProps = {
  children: null,
  classNames: '',
};
export default Panel;
