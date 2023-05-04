// User Form
import React from 'react';
import PropTypes from 'prop-types';
import './EnquiryForm.css';

export default function EnquiryForm(props) {
  const { active } = props;
  return (
    <form className={`user-form ${active ? 'active' : ''}`}>
      <h3>Enquiry Form</h3>
      <div className="box">
        <input type="text" placeholder="your enquiry" />
      </div>
      <p>
        We will get back to you as soon as possible.
      </p>
      <p>
        Thank You
      </p>
      <button type="submit" className="btn">
        Send Enquiry
      </button>
    </form>
  );
}
EnquiryForm.propTypes = {
  active: PropTypes.bool,
}.isRequired;
