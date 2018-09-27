"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Confirm = function (_React$Component) {
  _inherits(Confirm, _React$Component);

  function Confirm() {
    _classCallCheck(this, Confirm);

    return _possibleConstructorReturn(this, (Confirm.__proto__ || Object.getPrototypeOf(Confirm)).apply(this, arguments));
  }

  _createClass(Confirm, [{
    key: 'confirm',
    value: function confirm() {
      this.refs['window'].close();
      this.props.onConfirm();
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this.refs['window'].close();
      this.props.onCancel();
    }
  }, {
    key: 'render',
    value: function render() {

      var text = void 0;

      if (this.props.text) {
        text = React.createElement(
          'div',
          { className: 'confirm__text' },
          this.props.text
        );
      }

      return React.createElement(
        'div',
        { className: 'confirm' },
        React.createElement(
          Window,
          { ref: 'window', title: this.props.title, allowMinimize: false, allowFullscreen: false, onActionCloseClick: this.props.onCancel },
          React.createElement(
            'div',
            { className: 'confirm__view' },
            text,
            React.createElement(
              'div',
              { className: 'confirm__footer' },
              React.createElement(
                'button',
                { className: 'btn btn--confirm', onClick: this.confirm.bind(this) },
                this.props.confirmBtnText
              ),
              React.createElement(
                'button',
                { className: 'btn btn--cancel', onClick: this.cancel.bind(this) },
                this.props.cancelBtnText
              )
            )
          )
        )
      );
    }
  }]);

  return Confirm;
}(React.Component);

// Example

Confirm.defaultProps = {
  title: 'Confirm',
  text: '',
  confirmBtnText: 'Ok',
  cancelBtnText: 'Cancel',
  onConfirm: function onConfirm() {},
  onCancel: function onCancel() {}
};
var socketEl = document.querySelector('#socket');
ReactDOM.render(React.createElement(Confirm, { title: 'Delete page', text: 'Are you sure?', onCancel: function onCancel(e) {
    return alert('Cancel');
  }, onConfirm: function onConfirm(e) {
    return alert('Confirm');
  } }), socketEl);