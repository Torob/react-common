import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Select, { createFilter, components } from 'react-select';

const MenuList = props => {
  const children = React.useMemo(() => React.Children.toArray(props.children), [props.children]);

  return <components.MenuList {...props}>{children.length > 50 ? children.slice(0, 50) : props.children}</components.MenuList>;
};

const Control = props => {
  return (
    <OverlayTrigger placement="bottom" overlay={<Tooltip id="select-help">{props.getValue()[0].label}</Tooltip>}>
      <div>
        <components.Control {...props}>{props.children}</components.Control>
      </div>
    </OverlayTrigger>
  );
};

const StaticShopSelector = ({ isLoading, shops, selectedShop, onChange }) => {
  return (
    <Select
      filterOption={createFilter({ ignoreAccents: false })}
      isRtl
      placeholder={'انتخاب فروشگاه'}
      noOptionsMessage={() => 'موردی پیدا نشد'}
      value={selectedShop}
      options={shops}
      isLoading={isLoading}
      isDisabled={isLoading || !shops.length}
      onChange={onChange}
      styles={{ container: styles => ({ ...styles, marginBottom: '1rem' }) }}
      components={{ MenuList, Control }}
    />
  );
};

const shopFormat = PropTypes.shape({
  value: PropTypes.object.isRequired,
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
