import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBreeds } from '../../store/actions/breedsActions';
import { InfiniteScroll } from '../InfiniteScroll/InfiniteScroll';
import { DogsList } from '../DogsList/DogsList';
import { NoResults } from '../NoResults/NoResults';

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
      <InfiniteScroll
        isLoading={isLoading}
        loadMore={() => console.log('loading more')}
      >
        <DogsList images={dogs} onClick={this.onClick} />
      </InfiniteScroll>
    );
  }
}

const mapStateToProps = state => ({
  breeds: state.breeds.breeds,
  dogs: state.dogs.dogs,
  isLoading: state.helpers.isLoading,
});

export const Dogs = connect(mapStateToProps, { fetchBreeds })(DogsComponent);
