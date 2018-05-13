import styled from 'react-emotion';

export const Layout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 120px 1fr;
  grid-template-areas:
    'header'
    'content';
`;
