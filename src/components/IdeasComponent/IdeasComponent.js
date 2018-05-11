import React from 'react';

import { IdeaTileComponent } from './components';
import './IdeasComponent.css';

const renderIdeaTiles = ideas => (
  ideas.map(idea => React.createElement(IdeaTileComponent, {...idea, key: idea.id}))
)

const IdeasComponent = props => React.createElement(
  'div',
  { className: 'idea-container' },
  renderIdeaTiles(props.guestIdeas),
);

export default IdeasComponent;
