import glamorous from 'glamorous';
import { css } from 'glamor';

const animationStyles = ({ size, button }) => {
  const spin = css.keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  });

  const styles = {
    display: 'block',
    margin: '5px',
    border: '5px solid #9c27b0',
    borderTopColor: 'transparent',
    borderRadius: '50%',
    animation: `${spin} 1s linear infinite`,
  };

  if (button) {
    styles.position = 'absolute';
    styles.top = '15%';
    styles.left = '0%';
  }

  if (size === 'sm') {
    styles.width = '10px';
    styles.height = '10px';
    styles.borderWidth = '2px';
  } else if (size === 'lg') {
    styles.width = '60px';
    styles.height = '60px';
  } else {
    styles.width = '36px';
    styles.height = '36px';
  }
  return styles;
};

export const Spinner = glamorous.span(animationStyles);
