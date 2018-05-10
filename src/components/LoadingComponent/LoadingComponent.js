import React from 'react';
import loadingIcon from './loading.svg';
import './loading.css';

const LoadingComponent = props => (
  <div className="loader loader--style8">
    <img src={loadingIcon} className="loading" alt="loading" />
  </div>
)

export default LoadingComponent;