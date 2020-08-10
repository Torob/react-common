import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { Row, Col } from 'react-bootstrap';
import { FiX, FiAlertTriangle, FiAlertOctagon, FiAlertCircle } from 'react-icons/fi';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { colors } from './torobStyles';

const Toast = ({ children, variant, onDismiss, rounded = true }) => {
  const renderVariantIcon = (variant) => {
    switch (variant) {
      case 'error':
        return <FiAlertTriangle />;
      case 'warning':
        return <FiAlertOctagon />;
      case 'hint':
        return <FiAlertCircle />;
      case 'success':
        return <IoMdCheckmarkCircle style={{ fill: colors['success-txt'] }} />;
      default:
        break;
    }
  };
  return (
    <Row className={css(styles.baseToast, styles[variant], rounded && styles.roundedRadius)}>
      <Col md={1} className={css(styles.toastCol)}>
        <FiX style={{ fontSize: '18px' }} onClick={onDismiss} />
      </Col>
      <Col md={10} className={css(styles.toastCol, styles.toastContent)}>
        {children}
      </Col>
      <Col md={1} className={css(styles.toastCol)}>
        {renderVariantIcon(variant)}
      </Col>
    </Row>
  );
};

Toast.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['error', 'warning', 'hint', 'success']),
  onDismiss: PropTypes.func,
  rounded: PropTypes.bool,
};

Toast.defaultProps = {
  children: undefined,
  variant: undefined,
  onDismiss: () => undefined,
  rounded: true,
};

const styles = StyleSheet.create({
  baseToast: {
    margin: 10,
    padding: 10,
    fontSize: '14px',
  },
  roundedRadius: {
    borderRadius: '4px',
  },
  toastCol: {
    padding: 'unset',
  },
  toastContent: {
    paddingRight: '10px',
    direction: 'rtl',
  },
  error: {
    backgroundColor: colors['error-bg'],
    color: colors['error-txt'],
  },
  warning: {
    backgroundColor: colors['warning-bg'],
    color: colors['warning-txt'],
  },
  hint: {
    backgroundColor: colors['hint-bg'],
    color: colors['hint-txt'],
  },
  success: {
    backgroundColor: colors['success-bg'],
    color: colors['success-txt'],
  },
});

export default Toast;
