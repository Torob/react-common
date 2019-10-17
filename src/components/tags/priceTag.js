import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { toFarsiNumber } from '../../../common/utils';

const PriceTag = ({ price }) => {
  const priceFormatter = x => (x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' تومان' : 'ناموجود');

  return <span className={css(styles.priceTag)}>{toFarsiNumber(priceFormatter(price))}</span>;
};

const styles = StyleSheet.create({
  priceTag: {
    fontSize: '14px',
    fontWeight: 'bold',
    display: 'block',
    marginTop: '4px',
    marginBottom: '4px',
  },
});

export default PriceTag;
