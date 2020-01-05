import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import { StyleSheet, css } from 'aphrodite';
import StaticShopSelector from './shopSelector';
import { colors } from '../torobStyles';

const styles = StyleSheet.create({
  secondarySidebarSticky: {
    position: 'relative',
    top: '0',
    height: '100vh',
    padding: '1.5rem',
    'overflow-x': 'hidden',
  },
  navItem2: {
    fontSize: '14px',
  },
  navItemTitle: {
    margin: '10px 0',
    width: '100%',
    position: 'relative',
    textAlign: 'center',
    borderBottom: '2px solid #bbb',
    borderTop: '2px solid #bbb',
  },
  navLinkDark2: {
    color: '#333333',
    padding: '0.5rem',
  },
  navLinkActive: {
    backgroundColor: colors.blue,
  },
});

const SecondaryNavigation = ({ location, items, instances, selectedInstance, onInstanceChange, renderShopSelect }) => {
  const activeKey = location.pathname;
  return (
    <div className={css(styles.secondarySidebarSticky)}>
      {renderShopSelect ? (
        <StaticShopSelector shops={instances} selectedShop={selectedInstance} onChange={onInstanceChange} />
      ) : null}

      <Nav variant="pills" className="flex-column" activeKey={activeKey}>
        {items.map((i, index) => {
          if (!i) return null;
          if (i.type === 'title') {
            return (
              <Nav.Item key={i.id} className={css(styles.navItemTitle)}>
                {i.name}
              </Nav.Item>
            );
          }
          if (i.type === 'divider') {
            return <hr key={index} style={{ width: '100%' }} />;
          }
          return (
            <Nav.Item key={i.id} className={css(styles.navItem2)}>
              <Nav.Link
                eventKey={i.key}
                className={css(styles.navLinkDark2, activeKey === i.key && styles.navLinkActive)}
                as={Link}
                to={i.to}
                disabled={i.disabled}
              >
                {i.name}
              </Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </div>
  );
};
const itemFormat = PropTypes.shape({
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  name: PropTypes.string,
  isWide: PropTypes.bool,
});
SecondaryNavigation.propTypes = {
  location: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(itemFormat).isRequired,
  renderShopSelect: PropTypes.bool.isRequired,
  instances: PropTypes.array,
  selectedInstance: PropTypes.object,
  onInstanceChange: PropTypes.func,
};

SecondaryNavigation.defaultProps = {
  instances: null,
  onInstanceChange: null,
  selectedInstance: null,
};

export default SecondaryNavigation;
