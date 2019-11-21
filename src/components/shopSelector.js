import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { useAuth } from '../providers/auth';
import useTorobAPI from '../hooks/useTorobAPI';
import urls from '../urls';

const DynamicShopSelector = ({ userShops, onChange: cbOnChange }) => {
  if (userShops) {
    let shops = user.user.panel_accesses[0].objects.map(shop => ({ value: shop.instance_id, label: shop.name }));
    return (
      <Select
        isRtl
        placeholder={'همه'}
        options={shops}
        onChange={e => {
          setActiveInstance({ ...activeInstance, instanceId: e.value, instanceName: e.label });
          cbOnChange && cbOnChange();
        }}
        value={{ value: activeInstance.instanceId, label: activeInstance.instanceName }}
      />
    );
  } else {
    if (resource.isError) {
      return <Select isRtl placeholder={'خطا!'} options={[]} isDisabled={true} />;
    }

    return (
      <Select
        isRtl
        placeholder={'همه'}
        options={resource.data.results.map(shop => {
          return { value: shop.id, label: shop.name };
        })}
        isLoading={resource.isLoading}
        isDisabled={resource.isLoading}
        onChange={e => onChange(e.value)}
      />
    );
  }
};

DynamicShopSelector.propTypes = {
  userShops: PropTypes.array,
  onChange: PropTypes.func,
};

DynamicShopSelector.defaultProps = {
  userShops: [],
  onChange: () => undefined,
};

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

export { DynamicShopSelector, StaticShopSelector };
