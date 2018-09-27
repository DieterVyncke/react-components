"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingImage = function (_React$Component) {
  _inherits(LoadingImage, _React$Component);

  function LoadingImage(props) {
    _classCallCheck(this, LoadingImage);

    var _this = _possibleConstructorReturn(this, (LoadingImage.__proto__ || Object.getPrototypeOf(LoadingImage)).call(this, props));

    _this.state = {
      isLoaded: false
    };
    return _this;
  }

  _createClass(LoadingImage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoload) {
        this.load();
      }
    }
  }, {
    key: 'load',
    value: function load() {
      var _this2 = this;

      if (!this.state.isLoaded) {

        var img = new Image();
        img.src = this.props.src;

        img.onload = function () {
          _this2.setState({
            isLoaded: true
          });
          _this2.props.onLoaded();
        };
      }
    }
  }, {
    key: 'render',
    value: function render() {

      return React.createElement(
        'div',
        { className: 'loading-image' + (this.state.isLoaded ? ' loading-image--loaded' : '') },
        React.createElement('img', { src: this.props.src, className: 'loading-image__img' })
      );
    }
  }]);

  return LoadingImage;
}(React.Component);

// Example

LoadingImage.defaultProps = {
  src: '',
  autoload: true,
  onLoaded: function onLoaded() {}
};
var socketEl = document.querySelector('#loading-image');

if (socketEl) {
  ReactDOM.render(React.createElement(LoadingImage, { src: 'https://placeimg.com/1280/900/any' }), socketEl);
}