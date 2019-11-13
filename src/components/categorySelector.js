import React from 'react';
import Select from 'react-select';
import useTorobAPI from '../hooks/useTorobAPI';
import urls from '../urls';

const DynamicCategorySelector = ({ onChange }) => {
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

  const categories = resource.data.results
    ? resource.data.results.map(cat => {
        return { value: cat.id, label: cat.title };
      })
    : [];

  return (
    <Select
      isRtl
      placeholder={'همه'}
      options={categories}
      isLoading={resource.isLoading}
      isDisabled={resource.isLoading}
      onChange={onChange}
    />
  );
};

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

export { DynamicCategorySelector, StaticCategorySelector };
