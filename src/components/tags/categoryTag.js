import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CategoryTag = ({ category }) => <span className={css(styles.categoryTag)}>{category}</span>;

CategoryTag.propTypes = {
  category: PropTypes.string,
};

CategoryTag.defaultProps = {
  category: '',
};

const styles = StyleSheet.create({
  categoryTag: {
    fontSize: '14px',
    fontWeight: 'bold',
    display: 'block',
    marginTop: '4px',
    marginBottom: '4px',
  },
});

export default CategoryTag;
