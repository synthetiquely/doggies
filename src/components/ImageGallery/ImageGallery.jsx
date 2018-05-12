import styled from 'react-emotion';

export const ImageGallery = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  grid-auto-flow: dense;
  padding: 10px;
`;
