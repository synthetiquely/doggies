import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'debounce';
import { css } from 'emotion';
import { Spinner } from '../Spinner/Spinner';

export class InfiniteScroll extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    loadMore: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  constructor(props) {
    super(props);
    this.loadMore = debounce(this.loadMore.bind(this), 250);
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.onScroll, {
      capture: true,
      passive: true,
    });
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.onScroll, true);
  };

  onScroll = () => {
    if (this.container && this.container.current && !this.props.isLoading) {
      const containerHeight = this.container.current.clientHeight;
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      const windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

      if (scrollTop + windowHeight >= containerHeight) {
        this.loadMore();
      }
    }
  };

  container = React.createRef();

  loadMore = () => {
    if (!this.props.isLoading) {
      this.props.loadMore();
    }
  };

  render() {
    const { isLoading } = this.props;
    return (
      <div ref={this.container}>
        {this.props.children}

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
      </div>
    );
  }
}
