import React from 'react';

const FlashMessageComponent = props => (
  <div className="container">
    <div className="alert alert-danger flash-alert" role="alert" onClick={props.closeAlert}>
      { props.errorMessage }
      <button type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
)

export default FlashMessageComponent;
