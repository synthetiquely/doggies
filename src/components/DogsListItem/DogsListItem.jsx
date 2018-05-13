import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from '../Image/Image';

export class DogsListItem extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  state = {
    imageLoaded: false,
    errored: false,
  };

  onLoad = () => {
    this.setState({
      imageLoaded: true,
    });
  };

  onError = () => {
    this.setState({
      errored: true,
    });
  };

  // @TODO: Image Loading, image loaded and image errored state
  render() {
    const { imageLoaded, errored } = this.state;
    const { image, onClick } = this.props;
    return (
      <Image
        tabIndex={0}
        src={image}
        alt="Doggo"
        imageLoaded={imageLoaded}
        errored={errored}
        cropped
        onLoad={this.onLoad}
        onError={this.onError}
        onClick={onClick}
      />
    );
  }
}
