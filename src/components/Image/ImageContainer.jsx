import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.colored ? '#ccc' : 'f8f8f8')};
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    filter: brightness(40%);
  }
`;

export const ImageContainer = ({ errored, children }) => (
  <Container colored={errored}>{children}</Container>
);

ImageContainer.propTypes = {
  errored: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
