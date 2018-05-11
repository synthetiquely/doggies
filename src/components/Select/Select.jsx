import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const SelectLabel = styled.label`
  position: relative;
  display: block;
  max-width: 400px;
  min-width: 180px;
  border: 1px solid #00796b;
  border-radius: 0;
  background-color: #fff;
  &:hover,
  &:active,
  &:focus {
    border-color: #00796b;
  }
`;

export const SelectOptions = styled.select`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 12px 55px 15px 15px;
  appearance: none;
  border: none;
  outline: none;
  color: #444;
  text-transform: uppercase;
  background-color: transparent;
  border-radius: 0;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 100%;
    background-color: #000;
  }
  &:hover,
  &:active,
  &:focus {
    color: #00796b;
  }
`;

const renderValues = options =>
  options.map(option => (
    <option key={option} value={option}>
      {option}
    </option>
  ));

export const Select = ({
  id, name, options, onChange, ...rest
}) => (
  <SelectLabel htmlFor={id}>
    <SelectOptions id={id} name={name} {...rest} onChange={onChange}>
      {renderValues(options)}
    </SelectOptions>
  </SelectLabel>
);

Select.defaultProps = {
  id: '',
  name: '',
};

Select.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  onChange: PropTypes.func.isRequired,
};
