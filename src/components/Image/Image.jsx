import styled from 'react-emotion';

export const Image = styled.img`
  width: ${props => (props.cropped ? '100%' : '')};
  height: ${props => (props.cropped ? '100%' : '')};
  object-fit: ${props => (props.cropped ? 'cover' : 'unset')};
  grid-column: span 1;
  grid-row: span 1;
  cursor: pointer;
`;
