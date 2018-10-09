"use strict";

import React from 'react';

export default class Carousel extends React.Component {

  static defaultProps = {
    align: 'center',
    onGoTo: (i) => {}
  };

  constructor(props) {

    super(props);

    this.state = {
      activeIndex: 0,
      translateX: 0
    };
  }

  goTo(index, emitEvent = true) {

    this.setState({
      activeIndex: index
    });

    if (emitEvent) {
      this.props.onGoTo(index);
    }
  }

  goToPrev() {

    let prevIndex = this.state.activeIndex-1;

    if (prevIndex <= 0) {
      this.goTo(this.props.children.length-1);
    } else {
      this.goTo(prevIndex);
    }
  }

  goToNext() {

    let nextIndex = this.state.activeIndex+1;

    if (nextIndex >= this.props.children.length) {
      this.goTo(0);
    } else {
      this.goTo(nextIndex);
    }
  }

  calibrateTransforms() {

    if (this.refs['slide-'+this.state.activeIndex]) {

      let wrapper = this.refs['wrapper'];
      let activeSlide = this.refs['slide-'+this.state.activeIndex];
      let offsetX = 0;

      switch(this.props.align) {
        case 'center':
          offsetX = -activeSlide.offsetLeft + (wrapper.offsetWidth/2) - (activeSlide.offsetWidth/2);
          break;
        case 'left':
          offsetX = -activeSlide.offsetLeft;
          break;
        case 'right':
          offsetX = -activeSlide.offsetLeft + wrapper.offsetWidth - activeSlide.offsetWidth;
          break;
      }

      this.setState({
        translateX: offsetX
      });
    }
  }

  componentDidUpdate(oldProps, oldState) {
    if (oldState.activeIndex !== this.state.activeIndex) {
      this.calibrateTransforms();
    }
  }

  componentDidMount() {
    this.calibrateTransforms();
  }

  render() {

    let slides;

    if (this.props.children.length > 1) {
      slides = this.props.children.map((child, i) => {
        return (
          <div key={i} className={'carousel__slide' + (this.state.activeIndex === i ? ' carousel__slide--active' : '')} ref={'slide-'+i} onClick={e => this.goTo(i)}>
            {child}
          </div>
        );
      });
    } else {
      slides = (
        <div className={'carousel__slide' + (this.state.activeIndex === 0 ? ' carousel__slide--active' : '')} ref={'slide-'+0} onClick={e => this.goTo(i)}>
          {this.props.children}
        </div>
      );
    }

    return (
      <div className="carousel" ref="wrapper">
        <div className="carousel__wrap" style={{transform: 'translateX('+this.state.translateX+'px)'}}>
          {slides}
        </div>
      </div>
    );
  }
}