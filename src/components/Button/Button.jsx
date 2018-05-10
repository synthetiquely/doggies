import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Spinner } from '../Spinner/Spinner';

const StyledButton = styled.button`
  position: relative;
  padding: 10px;
  font-size: 16px;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  background-color: #fff;
  cursor: pointer;
  &:hover, &:active, &:focus: {
    bordercolor: #9c27b0;
  }
`;

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
