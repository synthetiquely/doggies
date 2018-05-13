import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

export const GoBack = props => (
  <Link to="/" href="/">
    <Button {...props}>Go back to the gallery</Button>
  </Link>
);
