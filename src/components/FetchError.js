import React, { PropTypes } from 'react';

const FetchError = ({ message, onRetry }) => (
  <div>
    <p>Could not fetch data. {message}</p>
    <button onClick={onRetry}>Retry</button>
  </div>
);

FetchError.propTypes = {
  onRetry: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default FetchError;
