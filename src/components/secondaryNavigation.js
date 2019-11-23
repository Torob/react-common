import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import { StyleSheet, css } from 'aphrodite';
import { StaticShopSelector } from './shopSelector';

const SecondaryNavigation = ({ history, location, disableShops, onShopSelect, shopsResource }) => {
  console.log('hihi', location, history);
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
  );
};

SecondaryNavigation.propTypes = {
  // history
  // location
  disableShops: PropTypes.bool,
  onShopSelect: PropTypes.func,
};

SecondaryNavigation.defaultProps = {
  disableShops: false,
  onShopSelect: () => undefined,
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
});

export default SecondaryNavigation;
