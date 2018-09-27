"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlertOverlay = function (_React$Component) {
  _inherits(AlertOverlay, _React$Component);

  function AlertOverlay() {
    _classCallCheck(this, AlertOverlay);

    return _possibleConstructorReturn(this, (AlertOverlay.__proto__ || Object.getPrototypeOf(AlertOverlay)).apply(this, arguments));
  }

  _createClass(AlertOverlay, [{
    key: 'confirm',
    value: function confirm() {
      this.refs['overlay'].close();
      this.props.onConfirm();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        Overlay,
        { ref: 'overlay', allowClose: false, closeOnOverlayClick: false },
        React.createElement(Alert, { title: this.props.title, text: this.props.text, confirmBtnText: this.props.confirmBtnText, onConfirm: this.confirm.bind(this) })
      );
    }
  }]);

  return AlertOverlay;
}(React.Component);

// Example

AlertOverlay.defaultProps = {
  title: 'Alert',
  text: '',
  confirmBtnText: 'Ok',
  onConfirm: function onConfirm() {}
};
var socketEl = document.querySelector('#socket');
ReactDOM.render(React.createElement(AlertOverlay, { text: 'Could not complete your request.', onConfirm: function onConfirm(e) {
    return alert('Confirm');
  } }), socketEl);