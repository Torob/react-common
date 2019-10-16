import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { getGregorianDate } from '../../utils';
import InputDate from './InputDate';

class DateSpan extends Component {
  static get propTypes() {
    return {
      id: PropTypes.string.isRequired,
      loading: PropTypes.bool.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
    };
  }

  constructor(props) {
    super(props);
    this.updateStartDate = this.updateStartDate.bind(this);
    this.updateEndDate = this.updateEndDate.bind(this);
  }

  updateStartDate(val) {
    // TODO: check if form is valid.
    const { endDate, onChange } = this.props;
    onChange(val, endDate);
  }

  updateEndDate(val) {
    // TODO: check if form is valid.
    const { startDate, onChange } = this.props;
    onChange(startDate, val);
  }

  render() {
    const { startDate, endDate, loading, id } = this.props;
    const startDateG = getGregorianDate(startDate);
    const endDateG = getGregorianDate(endDate);
    const error = startDateG && endDateG && startDateG > endDateG ? 'تاریخ شروع باید قبل از تاریخ پایان باشد.' : '';
    return (
      <React.Fragment>
        <Form.Group>
          <Form.Label htmlFor={`${id}-start-date`}>از تاریخ</Form.Label>{' '}
          <InputDate id={`${id}-start-date`} onChange={this.updateStartDate} value={startDate} disabled={loading} error={error} />{' '}
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor={`${id}-end-date`}>تا تاریخ</Form.Label>{' '}
          <InputDate id={`${id}-end-date`} onChange={this.updateEndDate} value={endDate} disabled={loading} />
        </Form.Group>
      </React.Fragment>
    );
  }
}

export default DateSpan;
