"use strict";

class ImageSlideshow extends React.Component {

  constructor(props) {
    super(props);
  }

  goTo(index) {
    this.refs['slideshow'].goTo(index);
    this.refs['pagination'].goTo(index, false);
  }

  onSlideshowGoTo(index) {
    this.refs['pagination'].goTo(index, false);
  }

  onPaginationGoTo(index) {
    this.refs['slideshow'].pause();
    this.refs['slideshow'].goTo(index, false);
  }

  render() {
    return (
      <div>
        <Slideshow ref="slideshow" onGoTo={i => this.onSlideshowGoTo(i)}>
          <LoadingImage src="https://placeimg.com/1280/200/any" />
          <LoadingImage src="https://placeimg.com/1024/200/any" />
          <LoadingImage src="https://placeimg.com/1280/200/any" />
          <LoadingImage src="https://placeimg.com/1024/200/any" />
        </Slideshow>
        <DotPagination ref="pagination" amount="4" onGoTo={i => this.onPaginationGoTo(i)} />
      </div>
    );
  }
}