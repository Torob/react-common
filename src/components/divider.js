import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Divider = ({ orientation }) => {
  return <div className={css(orientation === 'vertical' ? styles.vertical : styles.horizontal)}></div>;
};

const styles = StyleSheet.create({
  horizontal: {
    'margin-top': '5px',
    'margin-bottom': '5px',
    height: '1px',
    width: '100%',
    'border-top': '1px solid gray',
  },
  vertical: {
    'margin-left': '5px',
    'margin-right': '5px',
    width: '1px',
    height: '100%',
    'border-left': '1px solid gray',
  },
});

export default Divider;
