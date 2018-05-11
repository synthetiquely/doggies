import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from '../Form/Form';
import { Select } from '../Select/Select';
import { Button } from '../Button/Button';
import { setSelectedBreed } from '../../store/actions/breedsActions';
import { fetchRandomDogs } from '../../store/actions/dogsActions';

export class DogsFormComponent extends Component {
  handleChange = (event) => {
    const { value } = event.target;
    if (this.props.selectedBreed !== value) {
      this.props.setSelectedBreed(event.target.value);
    }
  };

  handleClick = () => {
    this.props.fetchRandomDogs();
  };

  render() {
    const { selectedBreed, breeds } = this.props;
    return (
      <Form>
        <p style={{ fontWeight: 600 }}>CHOOSE THE BREED</p>
        <Select
          id="breeds-select"
          name="breeds-select"
          selected={selectedBreed}
          options={breeds}
          onChange={this.handleChange}
        />
        <p style={{ fontWeight: 600 }}>-- OR -- </p>
        <Button type="button" colored onClick={this.handleClick}>
          GO ALL RANDOM
        </Button>
      </Form>
    );
  }
}

DogsFormComponent.defaultProps = {
  selectedBreed: '',
  breeds: [],
};

DogsFormComponent.propTypes = {
  selectedBreed: PropTypes.string,
  breeds: PropTypes.arrayOf(PropTypes.string),
  setSelectedBreed: PropTypes.func.isRequired,
  fetchRandomDogs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  selectedBreed: state.breeds.selectedBreed,
  breeds: state.breeds.breeds,
});

const mapDispatchToProps = dispatch => ({
  setSelectedBreed: breed => dispatch(setSelectedBreed(breed)),
  fetchRandomDogs: () => dispatch(fetchRandomDogs()),
});

export const DogsForm = connect(mapStateToProps, mapDispatchToProps)(DogsFormComponent);
