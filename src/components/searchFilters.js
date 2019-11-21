import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, Col, Row, Button, Form, FormControl } from 'react-bootstrap';
import Select from 'react-select';
import { StyleSheet, css } from 'aphrodite';
import { bgStyles } from './torobStyles';
import { StaticCategorySelector } from './categorySelector';

const SearchFilters = ({
  onSubmit,
  values,
  setParams,
  isDetails,
  categories = { isLoading: false, isError: false, data: undefined },
}) => {
  const isConfirmedOptions = [
    {
      value: 'همه',
      label: 'همه',
    },
    {
      value: 'true',
      label: 'تایید شده',
    },
    {
      value: 'false',
      label: 'تایید نشده',
    },
  ];

  return (
    <Row className={css(styles.searchFiltersWrapepr)}>
      <Form.Group controlId="formBasicPassword" className={css(styles.searchFilterCategorySelect)}>
        <div className={css(styles.searchFilterInput)}>
          <Button className={css(styles.submitFilterButton, bgStyles['bg-blue'])} onClick={onSubmit}>
            {'جستجو'}
          </Button>
        </div>
        {isDetails ? (
          <div className={css(styles.searchFilterInput)}>
            <Form.Label>قیمت (تومان)</Form.Label>
            <Form>
              <Form.Row>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">از</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      value={values ? values.price__gt : ''}
                      onChange={e => setParams({ price__gt: e.target.value })}
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">تا</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      value={values ? values.price__lt : ''}
                      onChange={e => setParams({ price__lt: e.target.value })}
                    />
                  </InputGroup>
                </Col>
              </Form.Row>
            </Form>
          </div>
        ) : (
          <div className={css(styles.searchFilterInput)}>
            <Form.Label>وضعیت تایید</Form.Label>
            <Select options={isConfirmedOptions} isRtl placeholder={'همه'} onChange={e => setParams({ isConfirmed: e.value })} />
          </div>
        )}
        <div className={css(styles.searchFilterInput)}>
          <Form.Label>دسته بندی</Form.Label>
          <StaticCategorySelector
            isLoading={categories.isLoading}
            isError={categories.isError}
            categories={categories.data}
            onChange={e => setParams({ category: e.value })}
          />
        </div>
        <div className={css(styles.searchFilterInput)}>
          <Form.Label>جستجو کالا</Form.Label>
          <FormControl
            value={values ? values.query : ''}
            onChange={e => setParams({ query: e.target.value })}
            placeholder="نام کالا"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
      </Form.Group>
    </Row>
  );
};

SearchFilters.propTypes = {
  onSubmit: PropTypes.func,
  values: PropTypes.object,
  setParams: PropTypes.func,
  isDetails: PropTypes.bool,
  categories: PropTypes.object,
};

SearchFilters.defaultProps = {
  onSubmit: () => undefined,
  values: {
    price__gt: 0,
    price__lt: 0,
    query: '',
  },
  setParams: () => undefined,
  isDetails: false,
  categories: { isLoading: false, isError: false, data: undefined },
};

const styles = StyleSheet.create({
  searchFiltersWrapepr: {
    'box-shadow': 'inset 0px -1px 0px #e6e6e6',
  },
  searchFilterCategorySelect: {
    width: '100%',
    margin: '0px auto',
    'margin-bottom': '20px',
    direction: 'rtl',
  },
  submitFilterButton: {
    width: '111px',
    height: '40px',
    'margin-left': '-10px',
    'margin-top': '30px',
  },
  searchFilterInput: {
    display: 'inline-block',
    width: '20%',
    float: 'left',
    margin: '0px 1%',
  },
});

export default SearchFilters;
