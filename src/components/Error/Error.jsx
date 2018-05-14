import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { css } from 'emotion';
import { Button } from '../Button/Button';

const backgroundStyles = css`
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(http://cdn.themehelite.com/themeforest/404rpz/img/slide-2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
`;

const errorContainerStyles = css`
  z-index: 11;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s cubic-bezier(0, 0, 0.58, 1);
  background: rgba(32, 35, 45, 0.75);
`;

const errorContentStyles = css`
  z-index: 12;
  position: absolute;
  top: 50vh;
  left: 0;
  width: 100%;
  transition: all 0.3s cubic-bezier(0, 0, 0.58, 1);
  transform: translateY(-50%);
  text-align: center;
`;

const titleStyles = css`
  font-family: Lato, sans-serif;
  font-size: 70px;
  font-weight: 700;
  color: #fff;
`;

const subtitleStyles = css`
  margin: 0 0 30px;
  font-size: 22px;
  font-weight: 400;
  color: #fff;
`;

export const ErrorPage = ({ error }) => {
  if (error) {
    return (
      <div className={backgroundStyles}>
        <div className={errorContainerStyles}>
          <div className={errorContentStyles}>
            <h1 className={titleStyles}>Error</h1>
            <h2 className={subtitleStyles}>
              An error occured. Try to reload the page.
            </h2>
            <div>
              <a
                href="https://github.com/synthetiquely/doggies/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Report a bug</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

ErrorPage.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

ErrorPage.defaultProps = {
  error: null,
};

const mapStateToProps = state => ({
  error: state.helpers.error,
});

export const Error = connect(mapStateToProps)(ErrorPage);
