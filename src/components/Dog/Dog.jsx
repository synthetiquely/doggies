import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { css } from 'emotion';
import { DogsListItem } from '../DogsListItem/DogsListItem';
import { Button } from '../Button/Button';
import { fetchRandomDog } from '../../store/actions/dogsActions';

const containerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

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
      <div className={containerStyles}>
        <div
          className={css`
            padding-bottom: 20px;
          `}
        >
          <Button colored onClick={this.onClick}>
            Show me more dogs
          </Button>
        </div>
        {selectedDog ? <DogsListItem image={selectedDog} /> : null}
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

const Dog = connect(mapStateToProps, mapDispatchToProps)(DogComponent);

export default Dog;
