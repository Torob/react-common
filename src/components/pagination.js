import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';
import { css, StyleSheet } from 'aphrodite';
import { createUltimatePagination, ITEM_TYPES } from 'react-ultimate-pagination';

import { toFarsiNumber } from '../utils';

const WrapperComponent = ({ children }) => <Pagination className={css(styles.paginationWrapper)}>{children}</Pagination>;

const withPreventDefault = fn => event => {
  event.preventDefault();
  fn();
};

const Page = ({ value, isActive, onClick }) => (
  <Pagination.Item active={isActive} onClick={withPreventDefault(onClick)}>
    {toFarsiNumber(value)}
  </Pagination.Item>
);

const Ellipsis = ({ onClick }) => <Pagination.Ellipsis disabled />;

const FirstPageLink = ({ onClick }) => <Pagination.First onClick={withPreventDefault(onClick)} />;

const PreviousPageLink = ({ onClick }) => <Pagination.Prev onClick={withPreventDefault(onClick)} />;

const NextPageLink = ({ onClick }) => <Pagination.Next onClick={withPreventDefault(onClick)} />;

const LastPageLink = ({ onClick }) => <Pagination.Last onClick={withPreventDefault(onClick)} />;

const styles = StyleSheet.create({
  paginationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    direction: 'rtl',
  },
});

const itemTypeToComponent = {
  [ITEM_TYPES.PAGE]: Page,
  [ITEM_TYPES.ELLIPSIS]: Ellipsis,
  [ITEM_TYPES.FIRST_PAGE_LINK]: FirstPageLink,
  [ITEM_TYPES.PREVIOUS_PAGE_LINK]: PreviousPageLink,
  [ITEM_TYPES.NEXT_PAGE_LINK]: NextPageLink,
  [ITEM_TYPES.LAST_PAGE_LINK]: LastPageLink,
};

const TorobPagination = createUltimatePagination({ itemTypeToComponent, WrapperComponent });

TorobPagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onChange: PropTypes.func,
};

TorobPagination.defaultProps = {
  currentPage: 1,
  totalPages: 2,
  onChange: () => undefined,
};

export default TorobPagination;
