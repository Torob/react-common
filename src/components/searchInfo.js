import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiChevronDown } from 'react-icons/fi';
import { Col, Row, Dropdown } from 'react-bootstrap';
import { StyleSheet, css } from 'aphrodite';

class CustomToggle extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onClick(e);
  }

  render() {
    return (
      <span style={{ textDecoration: 'none' }} onClick={this.handleClick}>
        {this.props.children}
      </span>
    );
  }
}

const SearchInfo = ({ onChange, action, actOnChange }) => {
  const [activeOrder, setActiveOrder] = useState('date');
  const [activeSize, setActiveSize] = useState('20');

  const orderOptions = {
    date: 'تازه ترین ها',
    '-date': 'قدیمی ترین ها',
    price: 'گران ترین ها',
    '-price': 'ارزان ترین ها',
  };

  const pageSizeOptions = {
    '20': '۲۰',
    '50': '۵۰',
    '100': '۱۰۰',
    '200': '۲۰۰',
  };

  const onSelectOrder = e => {
    if (onChange) {
      setActiveOrder(e);
      onChange({
        sortBy: e,
      });
      if (actOnChange) action();
    }
  };

  const onSelectSize = e => {
    if (onChange) {
      setActiveSize(e);
      onChange({
        size: e,
      });
      if (actOnChange) action();
    }
  };

  return (
    <Row className={css(styles.wrapper)}>
      <Col md={3}>
        {'ترتیب نمایش: '}
        <Dropdown style={{ display: 'inline' }} onSelect={onSelectOrder}>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-order">
            {orderOptions[activeOrder]}
            <FiChevronDown />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {Object.keys(orderOptions).map(option => {
              return (
                <Dropdown.Item eventKey={option} active={option === activeOrder}>
                  {' '}
                  {orderOptions[option]}{' '}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col md={3}>
        {'تعداد در صفحه: '}
        <Dropdown style={{ display: 'inline' }} onSelect={onSelectSize}>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-page-size">
            {pageSizeOptions[activeSize]}
            <FiChevronDown />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {Object.keys(pageSizeOptions).map(option => {
              return (
                <Dropdown.Item eventKey={option} active={option === activeSize}>
                  {' '}
                  {pageSizeOptions[option]}{' '}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col md={3}></Col>
      <Col md={3}>{'۲۰ کالا از ۱۰۲۵'}</Col>
    </Row>
  );
};

SearchInfo.propTypes = {
  onChange: PropTypes.func,
  action: PropTypes.func,
  actOnChange: PropTypes.bool,
};

SearchInfo.defaultProps = {
  onChange: () => undefined, // state setter
  action: () => undefined, // actual callback function
  actOnChange: false,
};

const styles = StyleSheet.create({
  wrapper: {
    'box-shadow': 'inset 0px -1px 0px #e6e6e6',
    direction: 'rtl',
    'text-align': 'center',
    color: '#808080',
    padding: '5px 0',
  },
});

export default SearchInfo;
