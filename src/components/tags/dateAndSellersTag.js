import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import moment from 'moment-jalaali';

import { toFarsiNumber } from '../../../common/utils';
import { colors } from '../../../common/torobStyles/colors';

moment.loadPersian({ dialect: 'persian-modern', usePersianDigits: true });

const DateAndSellersTag = ({ date, sellers, showDate }) => {
  const persianDate = moment(date, 'YY-MM-DD HH:mm:ss').format('jD jMMMM jYYYY');
  return (
    <span className={css(styles.dateSellerTagWrapper)}>
      {toFarsiNumber(showDate ? `${persianDate} / ${sellers} فروشنده` : `${sellers} فروشنده`)}
    </span>
  );
};

const styles = StyleSheet.create({
  dateSellerTagWrapper: {
    fontSize: '14px',
    color: colors['ink50'],
    display: 'block',
    marginTop: '4px',
    marginBottom: '4px',
  },
});

export default DateAndSellersTag;
