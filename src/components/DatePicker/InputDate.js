import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import jquery from 'jquery';
// import URLS from './urls';

window.jQuery = jquery;
window.$ = jquery;
require('../lib/persian-datepicker/persianDatepicker.js');
require('../lib/persian-datepicker/persianDatepicker-default.css');

// it's a react component wrapper for persian date picker.
class InputDate extends Component {
  static get propTypes() {
    return {
      value: PropTypes.any.isRequired,
      id: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
      disabled: PropTypes.bool.isRequired,
      error: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      error: '',
    };
  }

  componentDidMount() {
    // persian callender is used under the hood.
    const el = jquery(`#${this.props.id}`);
    el.persianDatepicker({
      formatDate: 'YYYY-MM-DD',
      onSelect: () => {
        const val = el.attr('data-jDate');
        this.props.onChange(val);
      },
    });
  }

  render() {
    const { id, value, onChange, disabled, error } = this.props;
    return (
      <>
        <Form.Control
          type="text"
          id={id}
          onChange={onChange}
          value={value}
          disabled={disabled}
          autoComplete="off"
          size="sm"
          isInvalid={Boolean(error)}
        />
        {Boolean(error) ? (
          <Form.Control.Feedback type="invalid" style={{ width: 'unset' }}>
            {error}
          </Form.Control.Feedback>
        ) : null}
      </>
    );
  }
}

export default InputDate;
