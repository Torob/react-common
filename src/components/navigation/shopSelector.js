import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const StaticShopSelector = ({ isLoading, shops, selectedShop, onChange }) => {
  return (
    <Select
      isRtl
      placeholder={'انتخاب فروشگاه'}
      noOptionsMessage={() => 'موردی پیدا نشد'}
      value={selectedShop}
      options={shops}
      isLoading={isLoading}
      isDisabled={isLoading || !shops.length}
      onChange={onChange}
      styles={{ container: styles => ({ ...styles, marginBottom: '1rem' }) }}
    />
  );
};

const shopFormat = PropTypes.shape({
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
});
StaticShopSelector.propTypes = {
  isLoading: PropTypes.bool,
  shops: PropTypes.arrayOf(shopFormat),
  selectedShop: shopFormat,
  onChange: PropTypes.func,
};

StaticShopSelector.defaultProps = {
  isLoading: false,
  shops: [],
  onChange: () => undefined,
};

export default StaticShopSelector;
