import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const SelectLabel = glamorous.label({
  position: 'relative',
  display: 'block',
  maxWidth: '400px',
  minWidth: '180px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#fff',
  ':hover,:active,:focus': {
    borderColor: '#9c27b0',
  },
});

export const SelectOptions = glamorous.select({
  display: 'block',
  width: '100%',
  margin: '0',
  padding: '12px 55px 15px 15px',
  appearance: 'none',
  border: 'none',
  outline: 'none',
  color: '#444',
  backgroundColor: 'transparent',
  borderRadius: '0',
  cursor: 'pointer',
  '&::after': {
    content: '',
    position: 'absolute',
    top: '0',
    right: '0',
    width: '50px',
    height: '100%',
    backgroundColor: '#000',
  },
  ':hover,:active,:focus': {
    color: '#9c27b0',
  },
});

const renderValues = options =>
  options.map(option => (
    <option key={option.id} value={option.value}>
      {option.value}
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
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};
