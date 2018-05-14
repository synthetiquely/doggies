import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageContainer } from '../Image/ImageContainer';
import { Image } from '../Image/Image';

export class DogsListItem extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
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

  render() {
    const { imageLoaded, errored } = this.state;
    const { image, ...rest } = this.props;
    return (
      <ImageContainer errored={errored}>
        <Image
          tabIndex={0}
          src={image}
          alt="Doggo"
          cropped
          imageLoaded={imageLoaded}
          onLoad={this.onLoad}
          onError={this.onError}
          {...rest}
        />
      </ImageContainer>
    );
  }
}
