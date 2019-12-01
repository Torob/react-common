import React from 'react';
import PropTypes from 'prop-types';
import { FiShoppingCart, FiMessageSquare, FiUser, FiGitMerge } from 'react-icons/fi';
import { StyleSheet, css } from 'aphrodite';
import { bgStyles } from './torobStyles';
import urls from '../urls';
import { Nav, Col, Row } from 'react-bootstrap';

const MainNavigation = ({ activePane }) => (
  <div className={css(styles.mainSidebarStick, bgStyles['bg-skylight'])}>
    <Row>
      <Col>
        <Nav variant="pills" className="flex-column">
          <Nav.Item className={css(styles.navItem)}>
            <Nav.Link eventKey="first" active={activePane === 'shop-panel'} to={urls.shopPanel()}>
              <FiShoppingCart />
              فروشگاه
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={css(styles.navItem)}>
            <Nav.Link eventKey="second" active={activePane === 'crowdsource'} to={urls.crowdSourcePanel()}>
              <FiGitMerge />
              ادغام
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={css(styles.navItem)}>
            <Nav.Link eventKey="third" active={activePane === 'ticketing'} to={urls.ticketingPanel()}>
              <FiMessageSquare />
              پشتیبانی
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={css(styles.navItem)}>
            <Nav.Link eventKey="fourth" active={activePane === 'account'}>
              <FiUser />
              حساب من
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  </div>
);

MainNavigation.propTypes = {
  activePane: PropTypes.oneOf(['crowdsource', 'shop-panel', 'ticketing']),
};

MainNavigation.defaultProps = {
  activePane: 'crowdsource',
};

const styles = StyleSheet.create({
  mainSidebarStick: {
    position: 'relative',
    top: '0',
    height: '100vh',
    'padding-top': '.5rem',
    'overflow-x': 'hidden',
    'overflow-y': 'auto',
  },
  navItem: {
    padding: '12px',
    fontSize: '12px',
    'text-align': 'center',
  },
});

export default MainNavigation;
