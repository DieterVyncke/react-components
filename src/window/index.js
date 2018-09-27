"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Window = function (_React$Component) {
  _inherits(Window, _React$Component);

  function Window(props) {
    _classCallCheck(this, Window);

    var _this = _possibleConstructorReturn(this, (Window.__proto__ || Object.getPrototypeOf(Window)).call(this, props));

    _this.state = {
      isMinimized: false,
      isFullscreen: false,
      isClosed: false
    };
    return _this;
  }

  _createClass(Window, [{
    key: 'minimize',
    value: function minimize() {
      this.setState({
        isMinimized: true
      });
      this.props.onMinimize();
    }
  }, {
    key: 'unMinimize',
    value: function unMinimize() {
      this.setState({
        isMinimized: false
      });
      this.props.onUnMinimize();
    }
  }, {
    key: 'toggleMinimize',
    value: function toggleMinimize() {
      if (this.state.isMinimized) {
        this.unMinimize();
      } else {
        this.minimize();
      }
    }
  }, {
    key: 'setFullscreen',
    value: function setFullscreen() {
      this.setState({
        isFullscreen: true
      });
      this.props.onSetFullscreen();
    }
  }, {
    key: 'unsetFullscreen',
    value: function unsetFullscreen() {
      this.setState({
        isFullscreen: false
      });
      this.props.onUnsetFullscreen();
    }
  }, {
    key: 'toggleFullscreen',
    value: function toggleFullscreen() {
      if (this.state.isFullscreen) {
        this.unsetFullscreen();
      } else {
        this.setFullscreen();
      }
    }
  }, {
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
    key: 'toggleClosed',
    value: function toggleClosed() {
      if (this.state.isClosed) {
        this.open();
      } else {
        this.close();
      }
    }
  }, {
    key: 'actionMinimizeClick',
    value: function actionMinimizeClick() {
      this.toggleMinimize();
      this.props.onActionMinimizeClick();
    }
  }, {
    key: 'actionSetFullscreenClick',
    value: function actionSetFullscreenClick() {
      this.toggleFullscreen();
      this.props.onActionSetFullscreenClick();
    }
  }, {
    key: 'actionCloseClick',
    value: function actionCloseClick() {
      this.toggleClosed();
      this.props.onActionCloseClick();
    }
  }, {
    key: 'render',
    value: function render() {

      var actions = [];
      var actionsWrap = void 0;
      var stateClass = this.state.isMinimized ? ' window--minimized' : '';

      if (this.state.isFullscreen) {
        stateClass += ' window--fullscreen';
      }

      if (this.state.isClosed) {
        stateClass += ' window--closed';
      }

      if (this.props.allowMinimize) {
        actions.push(React.createElement(
          'button',
          { key: 'action-minimize', className: 'window__action window__action--minimize', onClick: this.actionMinimizeClick.bind(this) },
          '-'
        ));
      }

      if (this.props.allowFullscreen) {
        actions.push(React.createElement(
          'button',
          { key: 'action-set-fullscreen', className: 'window__action window__action--set-fullscreen', onClick: this.actionSetFullscreenClick.bind(this) },
          '+'
        ));
      }

      if (this.props.allowClose) {
        actions.push(React.createElement(
          'button',
          { key: 'action-close', className: 'window__action window__action--close', onClick: this.actionCloseClick.bind(this) },
          'x'
        ));
      }

      if (actions.length) {
        actionsWrap = React.createElement(
          'div',
          { className: 'window__actions' },
          actions
        );
      }

      return React.createElement(
        'div',
        { className: 'window' + stateClass },
        React.createElement(
          'div',
          { className: 'window__title-bar' },
          React.createElement(
            'div',
            { className: 'window__title' },
            this.props.title
          ),
          actionsWrap
        ),
        React.createElement(
          'div',
          { className: 'window__view' },
          this.props.children
        )
      );
    }
  }]);

  return Window;
}(React.Component);

// Example

Window.defaultProps = {
  title: '',
  allowMinimize: true,
  allowFullscreen: true,
  allowClose: true,
  onMinimize: function onMinimize() {},
  onUnMinimize: function onUnMinimize() {},
  onSetFullscreen: function onSetFullscreen() {},
  onUnsetFullscreen: function onUnsetFullscreen() {},
  onClose: function onClose() {},
  onOpen: function onOpen() {},
  onActionMinimizeClick: function onActionMinimizeClick() {},
  onActionSetFullscreenClick: function onActionSetFullscreenClick() {},
  onActionCloseClick: function onActionCloseClick() {}
};
var socketEl = document.querySelector('#socket');
ReactDOM.render(React.createElement(
  Window,
  { title: 'Example window' },
  'Example content'
), socketEl);