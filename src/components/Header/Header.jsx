import glamorous from 'glamorous';

export const Header = glamorous.header({
  gridArea: 'header',
  gridColumn: '1 / -1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderBottom: '1px solid rgba(0,0,0,.1)',
});
