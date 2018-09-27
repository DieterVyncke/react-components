"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DotPagination = function (_React$Component) {
  _inherits(DotPagination, _React$Component);

  function DotPagination(props) {
    _classCallCheck(this, DotPagination);

    var _this = _possibleConstructorReturn(this, (DotPagination.__proto__ || Object.getPrototypeOf(DotPagination)).call(this, props));

    _this.state = {
      activeIndex: 0
    };
    return _this;
  }

  _createClass(DotPagination, [{
    key: 'goTo',
    value: function goTo(index) {
      var emitEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


      if (index >= 0 && index < this.props.amount) {
        this.setState({
          activeIndex: index
        });

        if (emitEvent) {
          this.props.onGoTo(index);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var dots = [];

      var _loop = function _loop(i) {
        dots.push(React.createElement(
          'div',
          { key: i, className: 'dot-pagination__item' + (_this2.state.activeIndex === i ? ' dot-pagination__item--active' : '') },
          React.createElement(
            'button',
            { className: 'dot-pagination__btn', onClick: function onClick(e) {
                return _this2.goTo(i);
              } },
            i + 1
          )
        ));
      };

      for (var i = 0; i < this.props.amount; i++) {
        _loop(i);
      }

      return React.createElement(
        'div',
        { className: 'dot-pagination' },
        dots
      );
    }
  }]);

  return DotPagination;
}(React.Component);

// Example

DotPagination.defaultProps = {
  amount: 1,
  onGoTo: function onGoTo(index) {}
};
var socketEl = document.querySelector('#dot-pagination');

if (socketEl) {
  ReactDOM.render(React.createElement(DotPagination, { amount: '10' }), socketEl);
}