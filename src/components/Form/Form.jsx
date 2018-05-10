import styled from 'react-emotion';

export const Form = styled.form`
  display: flex;
  flex-direction: ${props => (props.inline ? 'row' : 'column')};
  justify-content: space-evenly;
  max-width: 400px;
`;
