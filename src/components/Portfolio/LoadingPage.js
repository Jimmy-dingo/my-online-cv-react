import React from 'react';
import './LoadingPage.css';

const LoadingPage = function ({ isLoading }) {
  const page = (
    <div class="content">

      <div class="loading">

        <p>loading</p>
        <span></span>

      </div>

    </div>
  );

  if (!isLoading) {
    return true
  }

  return page;
};

export default LoadingPage;
