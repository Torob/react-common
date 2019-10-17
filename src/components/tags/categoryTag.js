import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const CategoryTag = ({ category }) => <span className={css(styles.categoryTag)}>{category}</span>;

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
