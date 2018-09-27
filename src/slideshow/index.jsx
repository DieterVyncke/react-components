"use strict";

class Slideshow extends React.Component {

  static defaultProps = {
    autoplay: true,
    loop: true,
    slideInterval: 3000,
    onGoTo: (i) => {}
  };

  constructor(props) {

    super(props);

    this.state = {
      activeIndex: 0,
      prevIndex: -1
    };

    this.autoplayTimeout = null;
  }

  componentDidMount() {
    if (this.props.autoplay) {
      this.play();
    }
  }

  play() {
    this.autoplayTimeout = setTimeout(() => {
      this.goToNext();
      this.play();
    }, this.props.slideInterval);
  }

  pause() {
    clearTimeout(this.autoplayTimeout);
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.activeIndex !== this.state.activeIndex) {
      this.setState({
        prevIndex: prevState.activeIndex
      });
    }
  }

  goTo(index, emitEvent = true) {

    this.setState({
      activeIndex: index
    });

    if (emitEvent) {
      this.props.onGoTo(index);
    }
  }

  goToNext() {

    let nextIndex = this.state.activeIndex+1;

    if (nextIndex >= this.props.children.length) {
      if (! this.props.loop) {
        this.pause();
      } else {
        this.goTo(0);
      }
    } else {
      this.goTo(nextIndex);
    }
  }

  goToPrev() {

    let prevIndex = this.state.activeIndex-1;

    if (prevIndex <= 0) {
      if (! this.props.loop) {
        this.pause();
      } else {
        this.goTo(this.props.children.length-1);
      }
    } else {
      this.goTo(prevIndex);
    }
  }

  render() {

    let slides;

    if (this.props.children.length > 1) {
      slides = this.props.children.map((child, i) => {
        return (
          <div key={i} className={'slideshow__slide' + (this.state.activeIndex === i ? ' slideshow__slide--active' : '') + (this.state.prevIndex === i ? ' slideshow__slide--prev' : '')}>
            {child}
          </div>
        );
      });
    } else {
      slides = (
        <div className="slideshow__slide slideshow__slide--active">
          {this.props.children}
        </div>
      );
    }

    return (
      <div className="slideshow">
        <div className="slideshow__view">
          {slides}
        </div>
      </div>
    );
  }
}

// Example

const socketEl = document.querySelector('#slideshow');
if (socketEl) {
  ReactDOM.render(
    <Slideshow onGoTo={i => console.log(i)}>
      <div className="demo-slide-1">Slide 1</div>
      <div className="demo-slide-2">Slide 2</div>
      <div className="demo-slide-3">Slide 3</div>
      <div className="demo-slide-4">Slide 4</div>
    </Slideshow>, socketEl);
}