import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBreeds } from '../../store/actions/breedsActions';

export class DogsComponent extends Component {
  componentDidMount() {
    if (this.props.breeds && !this.props.breeds.length) {
      this.props.fetchBreeds();
    }
  }
  render() {
    return <div />;
  }
}

DogsComponent.propTypes = {
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchBreeds: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  breeds: state.breeds.breeds,
  helpers: state.helpers,
});

export const Dogs = connect(mapStateToProps, { fetchBreeds })(DogsComponent);
