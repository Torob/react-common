import React from 'react';
import PropTypes from 'prop-types';
import { FiShoppingCart, FiMessageSquare, FiUser } from 'react-icons/fi';
import { StyleSheet, css } from 'aphrodite';
import { bgStyles, colors } from './torobStyles';
import { CrowdSourceIcon } from './torobIcons';
import urls from '../urls';
import { Nav, Col, Row } from 'react-bootstrap';

const MainNavigation = ({ activePane }) => {
  const mainNavItems = [
    {
      text: 'فروشگاه',
      paneName: 'shop-panel',
      href: urls.shopPanel(),
      eventKey: 'first',
      icon: <FiShoppingCart />,
    },
    {
      text: 'ادغام',
      paneName: 'crowdsource',
      href: urls.crowdSourcePanel(),
      eventKey: 'second',
      icon: <CrowdSourceIcon color={activePane === 'crowdsource' ? '#FFF' : colors.blue} />,
    },
    {
      text: 'پشتیبانی',
      paneName: 'ticketing',
      href: urls.ticketingPanel(),
      eventKey: 'third',
      icon: <FiMessageSquare />,
    },
    {
      text: 'حساب من',
      paneName: 'account',
      href: urls.userInfo(),
      eventKey: 'fourth',
      icon: <FiUser />,
    },
  ];

  return (
    <div className={css(styles.mainSidebarStick, bgStyles['bg-skylight'])}>
      <Row>
        <Col>
          <Nav variant="pills" className="flex-column">
            {mainNavItems.map(item => {
              const active = activePane === item.paneName;
              return (
                <Nav.Item className={css(styles.navItem)}>
                  <Nav.Link
                    eventKey={item.eventKey}
                    active={active}
                    href={item.href}
                    className={css(styles.navLink, active && styles.activeNavLink)}
                  >
                    {item.icon}
                    {item.text}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Col>
      </Row>
    </div>
  );
};

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
  navLink: {
    color: colors.blue,
  },
  activeNavLink: {
    color: 'white',
    backgroundColor: colors.blue,
  },
});

export default MainNavigation;
