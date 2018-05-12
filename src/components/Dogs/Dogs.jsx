import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBreeds } from '../../store/actions/breedsActions';
import { DogsList } from '../DogsList/DogsList';

export class DogsComponent extends Component {
  static propTypes = {
    breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
    dogs: PropTypes.arrayOf(PropTypes.string).isRequired,
    fetchBreeds: PropTypes.func.isRequired,
  };

  componentDidMount() {
    if (this.props.breeds && !this.props.breeds.length) {
      this.props.fetchBreeds();
    }
  }

  onClick = id => () => console.log('Clicked!', id);

  // @TODO: Render no results component
  render() {
    const { dogs } = this.props;

    if (!dogs || !dogs.length) {
      return null;
    }

    return <DogsList images={dogs} onClick={this.onClick} />;
  }
}

const mapStateToProps = state => ({
  breeds: state.breeds.breeds,
  dogs: state.dogs.dogs,
  helpers: state.helpers,
});

export const Dogs = connect(mapStateToProps, { fetchBreeds })(DogsComponent);
