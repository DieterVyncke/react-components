"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfirmOverlay = function (_React$Component) {
  _inherits(ConfirmOverlay, _React$Component);

  function ConfirmOverlay() {
    _classCallCheck(this, ConfirmOverlay);

    return _possibleConstructorReturn(this, (ConfirmOverlay.__proto__ || Object.getPrototypeOf(ConfirmOverlay)).apply(this, arguments));
  }

  _createClass(ConfirmOverlay, [{
    key: 'confirm',
    value: function confirm() {
      this.refs['overlay'].close();
      this.props.onConfirm();
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this.refs['overlay'].close();
      this.props.onCancel();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        Overlay,
        { ref: 'overlay', allowClose: false, closeOnOverlayClick: false },
        React.createElement(Confirm, { title: this.props.title, text: this.props.text, confirmBtnText: this.props.confirmBtnText, onConfirm: this.confirm.bind(this), onCancel: this.cancel.bind(this) })
      );
    }
  }]);

  return ConfirmOverlay;
}(React.Component);

// Example

ConfirmOverlay.defaultProps = {
  title: 'Overlay',
  text: '',
  confirmBtnText: 'Ok',
  cancelBtnText: 'Cancel',
  onConfirm: function onConfirm() {},
  onCancel: function onCancel() {}
};
var socketEl = document.querySelector('#socket');
ReactDOM.render(React.createElement(ConfirmOverlay, { title: 'Delete', text: 'Are you sure?', onConfirm: function onConfirm(e) {
    return alert('Confirm');
  }, onCancel: function onCancel(e) {
    return alert('Cancel');
  } }), socketEl);