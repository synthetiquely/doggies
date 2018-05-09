import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from '../Form/Form';
import { Select } from '../Select/Select';
import { setSelectedBreed } from '../../store/actions/breedsActions';

export class DogsFormComponent extends Component {
  handleChange = (event) => {
    const { value } = event.target;
    if (this.props.selectedBreed !== value) {
      this.props.setSelectedBreed(event.target.value);
    }
  };

  render() {
    const { selectedBreed, breeds } = this.props;
    return (
      <Form inline>
        <p>Choose the breed</p>
        <Select
          id="breeds-select"
          name="breeds-select"
          selected={selectedBreed}
          options={breeds}
          onChange={this.handleChange}
        />
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
};

const mapStateToProps = state => ({
  selectedBreed: state.breeds.selectedBreed,
  breeds: state.breeds.breeds,
});

export const DogsForm = connect(mapStateToProps, {
  setSelectedBreed,
})(DogsFormComponent);
