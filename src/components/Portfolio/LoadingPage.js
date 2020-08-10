import React from 'react';
import './LoadingPage.css';

const LoadingPage = ({ isLoading }) => {
    const page =
        <div class="content">
            <div class="loading">
                <p>loading</p>
                <span></span>
            </div>
        </div>;

    if (isLoading === true) {
        return page
    }
    else {
        return <></>
    }

    return page
}

export default LoadingPage;
