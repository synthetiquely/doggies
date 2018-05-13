import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { css } from 'emotion';
import { Image } from '../Image/Image';
import { Button } from '../Button/Button';
import { fetchRandomDog } from '../../store/actions/dogsActions';

export class DogComponent extends Component {
  static propTypes = {
    selectedDog: PropTypes.string.isRequired,
    fetchRandomDog: PropTypes.func.isRequired,
  };

  componentDidMount = () => {
    if (!this.props.selectedDog) {
      this.props.fetchRandomDog();
    }
  };

  onClick = () => this.props.fetchRandomDog();

  render() {
    const { selectedDog } = this.props;
    return (
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 10px 0;
        `}
      >
        {selectedDog ? <Image src={selectedDog} alt="dog" /> : null}
        <div
          className={css`
            padding-top: 20px;
          `}
        >
          <Button colored onClick={this.onClick}>
            Show me more dogs
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedDog: state.dogs.selectedDog,
});

const mapDispatchToProps = dispatch => ({
  fetchRandomDog: () => dispatch(fetchRandomDog()),
});

export const Dog = connect(mapStateToProps, mapDispatchToProps)(DogComponent);
