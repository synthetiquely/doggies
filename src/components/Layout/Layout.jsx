import glamorous from 'glamorous';

export const Layout = glamorous.div({
  height: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '120px 1fr',
  gridTemplateAreas: `
      "header"
      "content"
    `,
});
