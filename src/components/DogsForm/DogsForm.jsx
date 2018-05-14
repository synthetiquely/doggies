import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from '../Form/Form';
import { Select } from '../Select/Select';
import { Button } from '../Button/Button';
import { Paragraph } from '../Paragraph/Paragraph';
import {
  fetchBreeds,
  setSelectedBreed,
} from '../../store/actions/breedsActions';
import { fetchRandomDogs } from '../../store/actions/dogsActions';

export class DogsFormComponent extends Component {
  static propTypes = {
    selectedBreed: PropTypes.string,
    breeds: PropTypes.arrayOf(PropTypes.string),
    setSelectedBreed: PropTypes.func.isRequired,
    fetchRandomDogs: PropTypes.func.isRequired,
    fetchBreeds: PropTypes.func.isRequired,
  };

  static defaultProps = {
    selectedBreed: '',
    breeds: [],
  };

  componentDidMount() {
    if (this.props.breeds && !this.props.breeds.length) {
      this.props.fetchBreeds();
    }
  }

  handleChange = (event) => {
    const { value } = event.target;
    if (this.props.selectedBreed !== value) {
      this.props.setSelectedBreed(value);
    }
  };

  handleClick = () => {
    this.props.fetchRandomDogs();
  };

  render() {
    const { selectedBreed, breeds } = this.props;
    return (
      <Form>
        <Paragraph>Choose the breed</Paragraph>
        <Select
          id="breeds-select"
          name="breeds-select"
          data-testid="breeds-select"
          selected={selectedBreed}
          options={breeds}
          onChange={this.handleChange}
        />
        <Paragraph> OR </Paragraph>
        <Button type="button" colored onClick={this.handleClick}>
          Go all random
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  selectedBreed: state.breeds.selectedBreed,
  breeds: state.breeds.breeds,
});

const mapDispatchToProps = dispatch => ({
  setSelectedBreed: breed => dispatch(setSelectedBreed(breed)),
  fetchRandomDogs: () => dispatch(fetchRandomDogs()),
  fetchBreeds: () => dispatch(fetchBreeds()),
});

export const DogsForm = connect(mapStateToProps, mapDispatchToProps)(DogsFormComponent);
