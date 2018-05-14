import styled from 'react-emotion';

export const Image = styled.img`
  grid-column: span 1;
  grid-row: span 1;
  width: ${props => (props.cropped ? '100%' : '')};
  height: ${props => (props.cropped ? '100%' : '')};
  object-fit: ${props => (props.cropped ? 'cover' : 'unset')};
  will-change: opacity;
  transition: opacity 1s;
  opacity: ${props => (props.imageLoaded ? '1' : '0')};
  cursor: pointer;
`;
