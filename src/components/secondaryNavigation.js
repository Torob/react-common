import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import { StyleSheet, css } from 'aphrodite';
import Sidebar from 'react-sidebar';

import { StaticShopSelector } from './shopSelector';
import { colors } from './torobStyles';

const SecondaryNavigation = ({ history, location, children, disableShops, onShopSelect, shopsResource, responsive, open }) => {
  const handleNavOnClick = e => {
    switch (e) {
      case '/search':
        history.push('/search');
        break;
      case '/history':
        history.push('/history');
        break;
      case '/guide':
        history.push('/guide');
        break;
      default:
        break;
    }
  };

  const activeKey = location.pathname;

  return (
    <Sidebar
      open={responsive ? open : true}
      shadow={false}
      pullRight={true}
      styles={{ content: { inset: '0px 100px 0px 0px' } }}
      sidebarClassName={css(styles.sidebar)}
      contentClassName={open ? css(styles.contentWSecondaNav) : css(styles.contentWOSecondNav)}
      overlayClassName={css(styles.noOverlay)}
      sidebar={
        <div className={css(styles.secondarySidebarSticky)}>
          {!disableShops ? (
            <StaticShopSelector
              isLoading={shopsResource.isLoading}
              isError={shopsResource.isError}
              shops={shopsResource.data}
              onChange={onShopSelect}
            />
          ) : null}

          <Nav variant="pills" className="flex-column" activeKey={activeKey} onSelect={handleNavOnClick}>
            <Nav.Item className={css(styles.navItem)}>
              <Nav.Link eventKey="/search">محصولات فروشگاه</Nav.Link>
            </Nav.Item>
            <Nav.Item className={css(styles.navItem)}>
              <Nav.Link eventKey="/history">تاریخچه درخواست ها</Nav.Link>
            </Nav.Item>
            <Nav.Item className={css(styles.navItem)}>
              <Nav.Link eventKey="/guide">راهنمای ادغام</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      }
    >
      {children}
    </Sidebar>
  );
};

SecondaryNavigation.propTypes = {
  // history
  // location
  disableShops: PropTypes.bool,
  onShopSelect: PropTypes.func,
  shopsResource: PropTypes.object,
  responsive: PropTypes.bool,
  open: PropTypes.bool,
};

SecondaryNavigation.defaultProps = {
  disableShops: false,
  onShopSelect: () => undefined,
  shopsResource: {
    isLoading: false,
    isError: false,
    data: [],
  },
  responsive: false,
  open: false,
};

const styles = StyleSheet.create({
  secondarySidebarSticky: {
    position: 'relative',
    top: '0',
    height: '100%',
    'padding-top': '.5rem',
    'overflow-x': 'hidden',
  },

  navItem: {
    padding: '15px',
    fontSize: '14px',
    'padding-bottom': '0px',
    'padding-top': '5px',
  },

  sidebar: {
    right: '100px',
    width: '300px',
    borderLeft: `1px solid ${colors.ink10}`,
  },
  noOverlay: {
    display: 'none',
  },
  contentWSecondaNav: {
    inset: '0px 400px 0px 0px',
  },
  contentWOSecondNav: {
    inset: '0px 100px 0px 0px',
  },
});

export default SecondaryNavigation;
