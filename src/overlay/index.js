"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Overlay = function (_React$Component) {
  _inherits(Overlay, _React$Component);

  function Overlay(props) {
    _classCallCheck(this, Overlay);

    var _this = _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call(this, props));

    _this.state = {
      isClosed: false
    };
    return _this;
  }

  _createClass(Overlay, [{
    key: 'close',
    value: function close() {
      this.setState({
        isClosed: true
      });
      this.props.onClose();
    }
  }, {
    key: 'open',
    value: function open() {
      this.setState({
        isClosed: false
      });
      this.props.onOpen();
    }
  }, {
    key: 'overlayClick',
    value: function overlayClick(e) {

      this.close();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var stateClass = '';
      var header = void 0;

      if (this.state.isClosed) {
        stateClass += ' overlay--closed';
      }

      if (this.props.allowClose) {
        header = React.createElement(
          'div',
          { className: 'overlay__header' },
          React.createElement(
            'button',
            { className: 'overlay__close', onClick: this.close.bind(this) },
            'x'
          )
        );
      }

      return React.createElement(
        'div',
        { className: 'overlay' + stateClass },
        React.createElement(
          'div',
          { className: 'overlay__wrap' },
          header,
          React.createElement(
            'div',
            { className: 'overlay__view', onClick: this.props.closeOnOverlayClick ? function (e) {
                return _this2.overlayClick(e);
              } : '' },
            React.createElement(
              'div',
              { className: 'overlay__view-box', onClick: function onClick(e) {
                  return e.stopPropagation();
                } },
              this.props.children
            )
          )
        )
      );
    }
  }]);

  return Overlay;
}(React.Component);

// Example

Overlay.defaultProps = {
  allowClose: true,
  closeOnOverlayClick: true,
  onClose: function onClose() {}
};
var socketEl = document.querySelector('#socket');
ReactDOM.render(React.createElement(
  Overlay,
  { onClose: function onClose(e) {
      return alert('Close');
    } },
  'Example content'
), socketEl);