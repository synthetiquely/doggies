import React from 'react';
import PropTypes from 'prop-types';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { DogsListItem } from '../DogsListItem/DogsListItem';

const renderDogs = (images, onClick) =>
  images.map((image, index) => (
    <DogsListItem key={image} image={image} onClick={onClick(index)} />
  ));

export const DogsList = ({ images, onClick }) => (
  <ImageGallery>{renderDogs(images, onClick)}</ImageGallery>
);

DogsList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};
