import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InfiniteScroll } from '../InfiniteScroll/InfiniteScroll';
import { DogsList } from '../DogsList/DogsList';
import { NoResults } from '../NoResults/NoResults';

export class Dogs extends Component {
  static propTypes = {
    dogs: PropTypes.arrayOf(PropTypes.string).isRequired,
    isLoading: PropTypes.bool.isRequired,
    offset: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    setSelectedDog: PropTypes.func.isRequired,
    setPaginationOffset: PropTypes.func.isRequired,
  };

  onClick = dog => () => {
    this.props.setSelectedDog(dog);
    this.props.history.push('/dog');
  };

  changePaginationOffset = () => {
    const newOffset = this.props.offset + this.props.limit;
    this.props.setPaginationOffset(newOffset);
  };

  render() {
    const { dogs, isLoading } = this.props;

    if ((!dogs || !dogs.length) && !isLoading) {
      return <NoResults>No dogs found...</NoResults>;
    }

    return (
      <InfiniteScroll
        isLoading={isLoading}
        loadMore={this.changePaginationOffset}
      >
        <DogsList images={dogs} onClick={this.onClick} />
      </InfiniteScroll>
    );
  }
}
