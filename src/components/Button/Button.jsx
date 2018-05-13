import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Spinner } from '../Spinner/Spinner';

const StyledButton = styled.button`
  position: relative;
  padding: 5px;
  text-align: center;
  font-size: 16px;
  color: ${props => (props.colored ? '#fff' : '#000')};
  border: 1px solid #00796b;
  border-radius: 0;
  outline: none;
  background-color: ${props => (props.colored ? '#009688' : '#fff')};
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    background-color: ${props => (props.colored ? '#00796b' : '#fff')};
    border-color: #00796b;
  }
`;

export const Button = ({ loading, ...rest }) => (
  <StyledButton {...rest}>
    {loading && <Spinner button size="sm" />} <span>{rest.children}</span>
  </StyledButton>
);

Button.defaultProps = {
  loading: false,
};

Button.propTypes = {
  loading: PropTypes.bool,
};
