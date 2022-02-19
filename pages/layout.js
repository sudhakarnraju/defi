import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Head from 'next/head';

import SideMenu from '../components/sidebar/SideBarMenu';
import AppInfo from '../components/sidebar/AppInfo';
import SocialMedia from '../components/sidebar/SocialMedia';
import SiteActions from '../components/siteActions/SiteActions';

import 'font-awesome/css/font-awesome.min.css';
import styles from '../styles/layout.module.scss';

const menuImg = { open: '/images/menu.svg', close: '/images/closeIcon.svg' };
/**
 * Layout used by the App - Splits screen for side bar ( menu) and content area
 */
function Layout({ children, isMobile }) {
  const [menuVisible, setMenuVisible] = useState(true);
  const showContent = !isMobile || (isMobile && !menuVisible);
  const toggleMenuVisibility = () => isMobile && setMenuVisible(!menuVisible);
  const rootClass = classNames(styles.container, {
    [styles.isMobile]: isMobile,
    isMobile: true,
  });
  const sideMenuClass = classNames(styles.sideMenu, {
    [styles.hidden]: !menuVisible,
  });
  const menuIcon = menuVisible ? menuImg.close : menuImg.open;
  return (
    <div className={rootClass}>
      <Head>
        <title>De.fi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={sideMenuClass}>
          <div className={styles.appTitle}>
            <span className={styles.appName}>multichain</span>
            <div
              className={styles.appMenu}
              onClick={toggleMenuVisibility}
              onKeyDown={toggleMenuVisibility}
              role="button"
              tabIndex="0"
            >
              <img
                src={menuIcon}
                className={styles.menuImg}
                alt={menuVisible ? 'close menu' : 'open menu'}
              />
            </div>
          </div>
          {menuVisible && (
            <>
              {isMobile && (
                <div className={styles.topPanel}>
                  <SiteActions variant="mobile" />
                </div>
              )}
              <SideMenu onSelect={toggleMenuVisibility} />
              <div className={styles.sideMenuEndLine} />

              <div className={styles.sideBarFooter}>
                <div className={styles.separtor} />
                <AppInfo />
                <SocialMedia />
              </div>
            </>
          )}
        </div>

        {showContent && <div className={styles.content}>{children}</div>}

        <div className={styles.topPanel}>
          <SiteActions variant="desktop" />
        </div>
      </div>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isMobile: PropTypes.bool,
};
Layout.defaultProps = {
  isMobile: false,
};
export default Layout;
