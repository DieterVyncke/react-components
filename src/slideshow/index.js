"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slideshow = function (_React$Component) {
  _inherits(Slideshow, _React$Component);

  function Slideshow(props) {
    _classCallCheck(this, Slideshow);

    var _this = _possibleConstructorReturn(this, (Slideshow.__proto__ || Object.getPrototypeOf(Slideshow)).call(this, props));

    _this.state = {
      activeIndex: 0,
      prevIndex: -1
    };

    _this.autoplayTimeout = null;
    return _this;
  }

  _createClass(Slideshow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoplay) {
        this.play();
      }
    }
  }, {
    key: 'play',
    value: function play() {
      var _this2 = this;

      this.autoplayTimeout = setTimeout(function () {
        _this2.goToNext();
        _this2.play();
      }, this.props.slideInterval);
    }
  }, {
    key: 'pause',
    value: function pause() {
      clearTimeout(this.autoplayTimeout);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {

      if (prevState.activeIndex !== this.state.activeIndex) {
        this.setState({
          prevIndex: prevState.activeIndex
        });
      }
    }
  }, {
    key: 'goTo',
    value: function goTo(index) {
      var emitEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


      this.setState({
        activeIndex: index
      });

      if (emitEvent) {
        this.props.onGoTo(index);
      }
    }
  }, {
    key: 'goToNext',
    value: function goToNext() {

      var nextIndex = this.state.activeIndex + 1;

      if (nextIndex >= this.props.children.length) {
        if (!this.props.loop) {
          this.pause();
        } else {
          this.goTo(0);
        }
      } else {
        this.goTo(nextIndex);
      }
    }
  }, {
    key: 'goToPrev',
    value: function goToPrev() {

      var prevIndex = this.state.activeIndex - 1;

      if (prevIndex <= 0) {
        if (!this.props.loop) {
          this.pause();
        } else {
          this.goTo(this.props.children.length - 1);
        }
      } else {
        this.goTo(prevIndex);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var slides = void 0;

      if (this.props.children.length > 1) {
        slides = this.props.children.map(function (child, i) {
          return React.createElement(
            'div',
            { key: i, className: 'slideshow__slide' + (_this3.state.activeIndex === i ? ' slideshow__slide--active' : '') + (_this3.state.prevIndex === i ? ' slideshow__slide--prev' : '') },
            child
          );
        });
      } else {
        slides = React.createElement(
          'div',
          { className: 'slideshow__slide slideshow__slide--active' },
          this.props.children
        );
      }

      return React.createElement(
        'div',
        { className: 'slideshow' },
        React.createElement(
          'div',
          { className: 'slideshow__view' },
          slides
        )
      );
    }
  }]);

  return Slideshow;
}(React.Component);

// Example

Slideshow.defaultProps = {
  autoplay: true,
  loop: true,
  slideInterval: 3000,
  onGoTo: function onGoTo(i) {}
};
var socketEl = document.querySelector('#slideshow');
if (socketEl) {
  ReactDOM.render(React.createElement(
    Slideshow,
    { onGoTo: function onGoTo(i) {
        return console.log(i);
      } },
    React.createElement(
      'div',
      { className: 'demo-slide-1' },
      'Slide 1'
    ),
    React.createElement(
      'div',
      { className: 'demo-slide-2' },
      'Slide 2'
    ),
    React.createElement(
      'div',
      { className: 'demo-slide-3' },
      'Slide 3'
    ),
    React.createElement(
      'div',
      { className: 'demo-slide-4' },
      'Slide 4'
    )
  ), socketEl);
}