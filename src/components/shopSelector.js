import React from 'react';
import Select from 'react-select';
import { useAuth } from '../providers/auth';
import useTorobAPI from '../hooks/useTorobAPI';
import urls from '../urls';

const DynamicShopSelector = ({ userShops, onChange: cbOnChange }) => {
  if (userShops) {
    const { user, activeInstance, setActiveInstance } = useAuth();
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
    const [resource] = useTorobAPI(
      {
        method: 'GET',
        url: urls.common.categoriesList(),
      },
      []
    );

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

export { DynamicShopSelector, StaticShopSelector };
