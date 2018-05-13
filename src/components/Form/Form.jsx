import styled from 'react-emotion';

export const Form = styled.form`
  display: flex;
  flex-direction: ${props => (props.inline ? 'row' : 'column')};
  align-items: center;
  padding-bottom: 5px;
`;
