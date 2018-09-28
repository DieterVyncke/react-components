"use strict";

import React from 'react';

export default class LoadingImage extends React.Component {

  static defaultProps = {
    src: '',
    autoload: true,
    onLoaded: () => {}
  };

  constructor(props) {

    super(props);

    this.state = {
      isLoaded: false
    };
  }

  componentDidMount() {
    if (this.props.autoload) {
      this.load();
    }
  }

  load() {

    if (! this.state.isLoaded) {

      let img = new Image();
      img.src = this.props.src;

      img.onload = () => {
        this.setState({
          isLoaded: true
        });
        this.props.onLoaded();
      };
    }
  }

  render() {

    return (
      <div className={'loading-image' + (this.state.isLoaded ? ' loading-image--loaded' : '')}>
        <img src={this.props.src} className="loading-image__img" />
      </div>
    );
  }
}