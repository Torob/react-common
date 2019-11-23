import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const StaticCategorySelector = ({ isLoading, isError, categories, onChange }) => {
  if (isError) {
    return <Select isRtl placeholder={'خطا!'} options={[]} isDisabled={true} />;
  }

  categories =
    categories && categories.length
      ? categories.map(cat => {
          return { value: cat.id, label: cat.title };
        })
      : [];

  return (
    <Select isRtl placeholder={'همه'} options={categories} isLoading={isLoading} isDisabled={isLoading} onChange={onChange} />
  );
};

StaticCategorySelector.propTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  categories: PropTypes.array,
  onChange: PropTypes.func,
};

StaticCategorySelector.defaultProps = {
  isLoading: true,
  isError: false,
  categories: [],
  onChange: () => undefined,
};

export { StaticCategorySelector };
