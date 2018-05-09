import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { Spinner } from '../Spinner/Spinner';

const StyledButton = glamorous.button({
  position: 'relative',
  padding: '10px',
  fontSize: '16px',
  color: '#000',
  border: '1px solid #ccc',
  borderRadius: '5px',
  outline: 'none',
  backgroundColor: '#fff',
  cursor: 'pointer',
  ':hover,:active,:focus': {
    borderColor: '#9c27b0',
  },
});

export const Button = ({ loading, ...rest }) => (
  <StyledButton {...rest}>
    {loading && <Spinner button size="sm" />}{' '}
    <span style={{ padding: '0 15px' }}>{rest.children}</span>
  </StyledButton>
);

Button.defaultProps = {
  loading: false,
};

Button.propTypes = {
  loading: PropTypes.bool,
};
