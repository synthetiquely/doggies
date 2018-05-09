import glamorous from 'glamorous';

export const Form = glamorous.form(
  {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
  },
  ({ inline }) => {
    let styles = {};

    if (inline) {
      styles = {
        ...styles,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      };
    }

    return styles;
  },
);
