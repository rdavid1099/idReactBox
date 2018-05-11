import React from 'react';

const IdeaTileComponent = props => (
  <div className="card tile" style={{width: '18rem'}}>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.body}</p>
      <span className="card-link">+ {props.ups}</span>
      <span className="card-link">- {props.downs}</span>
    </div>
  </div>
)

export default IdeaTileComponent;
