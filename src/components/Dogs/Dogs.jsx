import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBreeds } from '../../store/actions/breedsActions';

import { Button } from '../Button/Button';
import { Select } from '../Select/Select';

const options = [
  {
    id: '1',
    value: '1',
  },
  {
    id: '2',
    value: '2',
  },
  {
    id: '3',
    value: '3',
  },
];

export class DogsComponent extends Component {
  componentDidMount() {
    if (this.props.breeds && !this.props.breeds.length) {
      this.props.fetchBreeds();
    }
  }
  render() {
    return (
      <div>
        <Select
          id="my-select"
          name="my-select"
          options={options}
          onChange={e => console.log(e.target)}
        />
        <Button loading>Start</Button>
      </div>
    );
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
