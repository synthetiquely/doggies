import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'debounce';
import { InfiniteScroll } from '../InfiniteScroll/InfiniteScroll';
import { DogsList } from '../DogsList/DogsList';
import { NoResults } from '../NoResults/NoResults';
import { calculatePaginationLimit } from '../../utils/limit';

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
    setPaginationLimit: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.onResize = debounce(this.onResize.bind(this), 300);
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.onResize, { passive: true });
    this.onResize();
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.onResize);
  };

  onClick = dog => () => {
    this.props.setSelectedDog(dog);
    this.props.history.push('/dog');
  };

  onResize = () => {
    const clientHeight = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0,
    );
    const clientWidth = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0,
    );

    const newLimit = calculatePaginationLimit(clientHeight, clientWidth);

    this.props.setPaginationLimit(newLimit);
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
