import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { css } from 'emotion';
import { fetchBreeds } from '../../store/actions/breedsActions';
import { DogsList } from '../DogsList/DogsList';
import { NoResults } from '../NoResults/NoResults';
import { Spinner } from '../Spinner/Spinner';

export class DogsComponent extends Component {
  static propTypes = {
    breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
    dogs: PropTypes.arrayOf(PropTypes.string).isRequired,
    fetchBreeds: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    if (this.props.breeds && !this.props.breeds.length) {
      this.props.fetchBreeds();
    }
  }

  onClick = id => () => console.log('Clicked!', id);

  render() {
    const { dogs, isLoading } = this.props;

    if ((!dogs || !dogs.length) && !isLoading) {
      return <NoResults>No dogs found...</NoResults>;
    }

    return (
      <React.Fragment>
        <DogsList images={dogs} onClick={this.onClick} />
        {isLoading ? (
          <div
            className={css`
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <Spinner />
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  breeds: state.breeds.breeds,
  dogs: state.dogs.dogs,
  isLoading: state.helpers.isLoading,
});

export const Dogs = connect(mapStateToProps, { fetchBreeds })(DogsComponent);
