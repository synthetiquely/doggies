import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'react-emotion';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const Spinning = styled('span')(props => ({
  position: props.button && 'absolute',
  top: props.button && '15%',
  left: props.button && '0%',
  display: 'block',
  width: props.size === 'sm' ? '10px' : '36px',
  height: props.size === 'sm' ? '10px' : '36px',
  margin: '5px',
  border: '5px solid #009688',
  borderWidth: props.size === 'sm' ? '2px' : '5px',
  borderTopColor: 'transparent',
  borderRadius: '40px',
  animation: `${spin} 1.5s linear infinite`,
}));

export const Spinner = ({ overlayed, ...rest }) => {
  if (overlayed) {
    return (
      <Overlay>
        <Spinning {...rest} />
      </Overlay>
    );
  }
  return <Spinning {...rest} />;
};

Spinner.propTypes = {
  overlayed: PropTypes.bool,
};

Spinner.defaultProps = {
  overlayed: false,
};
