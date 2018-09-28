"use strict";

import React from 'react';

export default class Button extends React.Component {

  static defaultProps = {
    'text': 'Test'
  };

  render() {
    return (
      <button>{this.props.text}</button>
    );
  }
}