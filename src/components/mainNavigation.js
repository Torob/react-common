import React from 'react';
import { FiShoppingCart, FiMessageSquare, FiUser, FiGitMerge } from 'react-icons/fi';
import { StyleSheet, css } from 'aphrodite';
import { bgStyles } from './torobStyles/colors';
import { Nav, Col, Row } from 'react-bootstrap';

const MainNavigation = ({ activePane }) => (
  <div className={css(styles.mainSidebarStick, bgStyles['bg-skylight'])}>
    <Row>
      <Col>
        <Nav variant="pills" className="flex-column">
          <Nav.Item className={css(styles.navItem)}>
            <Nav.Link eventKey="first" active={activePane === 'shop-panel'}>
              <FiShoppingCart />
              فروشگاه
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={css(styles.navItem)}>
            <Nav.Link eventKey="second" active={activePane === 'crowdsource'}>
              <FiGitMerge />
              ادغام
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={css(styles.navItem)}>
            <Nav.Link eventKey="third" active={activePane === 'ticketing'}>
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
