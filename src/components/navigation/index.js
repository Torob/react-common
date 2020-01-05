import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import { FiShoppingCart, FiMessageSquare, FiUser, FiGitMerge, FiSettings, FiX, FiMoreHorizontal } from 'react-icons/fi';
import { CrowdSourceIcon } from './torobIcons';
import { StyleSheet, css } from 'aphrodite/no-important';

import MainNavigation from './main';
import SecondaryNavigation from './secondry';

const styles = StyleSheet.create({
  container: {
    padding: '0 1em',
  },
  navigationButton: {
    position: 'fixed',
    bottom: '40px',
    left: '40px',
    width: '60px',
    height: '60px',
    borderRadius: '30px',
    fontSize: '30px',
    lineHeight: '55px',
    zIndex: 120,
  },
  fullWidth: {
    width: '100%',
  },
  fixSidebarWidth: {
    width: 'calc(100%/4)',
    maxWidth: '400px',
    minWidth: '280px',
  },
  fixSingleSidebarWidth: {
    width: '100px',
  },
  fixSidebar: {
    padding: '0',
    position: 'fixed',
    top: '0',
    bottom: '0',
    right: '0',
    'z-index': '100',
    display: 'flex',
  },
  mainSidebar: {
    width: '100px',
    backgroundColor: '#f9fafb',
    padding: '8px',
  },
  secondSidebar: {
    flexGrow: 1,
    'background-color': 'white',
    'box-shadow': 'inset 1px 0 0 rgba(0, 0, 0, .1)',
  },
  rtl: {
    flexDirection: 'row-reverse',
  },
});
const Navigation = ({
  instance,
  items,
  match,
  location,
  children,
  selectedInstance,
  instances,
  handleInstanceChange,
  renderShopSelect,
  userInfo,
  mobileVersion,
  hasAccess,
  rtl,
  enablePermissions,
}) => {
  const sidebarWidthClasss = items.length ? styles.fixSidebarWidth : styles.fixSingleSidebarWidth;
  const [isSideBarVisible, onToggle] = useState(false);
  let prefix = match.url;
  if (prefix[prefix.length - 1] !== '/') {
    prefix = prefix + '/';
  }
  const navigationClass = isSideBarVisible
    ? `${css(styles.fixSidebar, styles.fullWidth, rtl && styles.rtl)} d-flex`
    : `${css(styles.fixSidebar, sidebarWidthClasss, rtl && styles.rtl)} d-none d-sm-flex`;
  return (
    <React.Fragment>
      <div className={navigationClass}>
        <div className={css(styles.mainSidebar)}>
          <MainNavigation
            panes={[
              {
                id: '/',
                name: 'فروشگاه',
                icon: <FiShoppingCart />,
                linkProps: { as: Link, to: `/` },
              },
              {
                id: 'crowdsource',
                name: 'ادغام',
                icon: <CrowdSourceIcon />,
                linkProps: {
                  href: 'https://matching.torob.com',
                  disabled: instance.id === undefined && !(userInfo && userInfo.isStaff),
                },
              },
              {
                id: 'ticketing',
                name: 'پشتیبانی',
                icon: <FiMessageSquare />,
                linkProps: {
                  href: 'https://ticketing.torob.com',
                  disabled: instance.id === undefined && !(userInfo && userInfo.isStaff),
                },
              },
              {
                id: '/account/',
                name: 'حساب من',
                icon: <FiUser />,
                linkProps: { as: Link, to: `/account/info` },
              },
              {
                id: '/admin/',
                name: 'ادمین',
                icon: <FiSettings />,
                linkProps: { as: Link, to: `/admin/dashboard` },
                invisible: !userInfo.isStaff,
              },
            ]}
            activePane={prefix}
          />
        </div>
        {items.length ? (
          <div className={css(styles.secondSidebar)}>
            <SecondaryNavigation
              instances={instances}
              selectedInstance={selectedInstance}
              onInstanceChange={handleInstanceChange}
              renderShopSelect={renderShopSelect}
              location={location}
              items={enablePermissions ? items.map(i => hasAccess(instance, i.url, userInfo)) : items}
            />
          </div>
        ) : null}
      </div>
      <Button
        className={`${css(styles.navigationButton)} ${mobileVersion ? 'd-block d-sm-none' : 'd-none'}`}
        variant="primary"
        onClick={() => {
          onToggle(!isSideBarVisible);
        }}
      >
        {isSideBarVisible ? <FiX /> : <FiMoreHorizontal />}
      </Button>
      <div style={{ display: 'flex' }} className={css(rtl && styles.rtl)}>
        <div className={`${css(sidebarWidthClasss)} d-none d-sm-block`} style={{ flexShrink: 0 }} />
        <div style={{ flexGrow: 1 }}>
          {children}
          <div style={{ paddingTop: '1em' }}>
            {items.map(p => {
              if (p.render) {
                const res = enablePermissions ? hasAccess(instance, p.url, userInfo) : p;
                return res && !res.disabled ? (
                  <div key={p.url} className={res.isWide ? css(styles.container) : `container container-small`}>
                    <Route path={`${prefix}${p.url}`} render={props => p.render({ ...props, instance })} />
                  </div>
                ) : null;
              } else if (p.component) {
                const res = enablePermissions ? hasAccess(instance, p.url, userInfo) : p;
                return res && !res.disabled ? (
                  <div key={p.url} className={res.isWide ? css(styles.container) : `container container-small`}>
                    <Route path={`${prefix}${p.url}`} component={p.component} />
                  </div>
                ) : null;
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
Navigation.propTypes = {
  items: PropTypes.array,
  mobileVersion: PropTypes.bool,
  hasAccess: PropTypes.func,
  rtl: PropTypes.bool,
  enablePermissions: PropTypes.bool,
};
Navigation.defaultProps = {
  items: [],
  rtl: false,
  mobileVersion: true,
  enablePermissions: true,
};

export default Navigation;
