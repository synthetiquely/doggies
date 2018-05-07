import React from 'react';
import PropTypes from 'prop-types';

import { DogsListItem } from '../DogsListItem/DogsListItem';

const renderDogs = (images, onClick) =>
  images.map(image => <DogsListItem key={image} image={image} onClick={onClick} />);

export const DogsList = ({ images, onClick }) => <div>{renderDogs(images, onClick)}</div>;

DogsList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};
