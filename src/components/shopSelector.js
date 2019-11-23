import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const StaticShopSelector = ({ isLoading, isError, shops, onChange }) => {
  if (isError) {
    return <Select isRtl placeholder={'خطا!'} options={[]} isDisabled={true} />;
  }

  shops =
    shops && shops.length
      ? shops.map(shop => {
          return { value: shop.id, label: shop.name };
        })
      : [];

  return (
    <Select
      isRtl
      placeholder={'همه'}
      options={shops}
      isLoading={isLoading}
      isDisabled={isLoading}
      onChange={e => onChange(e.value)}
    />
  );
};

StaticShopSelector.propTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  shops: PropTypes.array,
  onChange: PropTypes.func,
};

StaticShopSelector.defaultProps = {
  isLoading: false,
  isError: false,
  shops: [],
  onChange: () => undefined,
};

export { StaticShopSelector };
