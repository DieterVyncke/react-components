"use strict";

import React from 'react';

export default class Window extends React.Component {

  static defaultProps = {
    title: '',
    allowMinimize: true,
    allowFullscreen: true,
    allowClose: true,
    onMinimize: () => {},
    onUnMinimize: () => {},
    onSetFullscreen: () => {},
    onUnsetFullscreen: () => {},
    onClose: () => {},
    onOpen: () => {},
    onActionMinimizeClick: () => {},
    onActionSetFullscreenClick: () => {},
    onActionCloseClick: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      isMinimized: false,
      isFullscreen: false,
      isClosed: false
    };
  }

  minimize() {
    this.setState({
      isMinimized: true
    });
    this.props.onMinimize();
  }

  unMinimize() {
    this.setState({
      isMinimized: false
    });
    this.props.onUnMinimize();
  }

  toggleMinimize() {
    if (this.state.isMinimized) {
      this.unMinimize();
    } else {
      this.minimize();
    }
  }

  setFullscreen() {
    this.setState({
      isFullscreen: true
    });
    this.props.onSetFullscreen();
  }

  unsetFullscreen() {
    this.setState({
      isFullscreen: false
    });
    this.props.onUnsetFullscreen();
  }

  toggleFullscreen() {
    if (this.state.isFullscreen) {
      this.unsetFullscreen();
    } else {
      this.setFullscreen();
    }
  }

  close() {
    this.setState({
      isClosed: true
    });
    this.props.onClose();
  }

  open() {
    this.setState({
      isClosed: false
    });
    this.props.onOpen();
  }

  toggleClosed() {
    if (this.state.isClosed) {
      this.open();
    } else {
      this.close();
    }
  }

  actionMinimizeClick() {
    this.toggleMinimize();
    this.props.onActionMinimizeClick();
  }

  actionSetFullscreenClick() {
    this.toggleFullscreen();
    this.props.onActionSetFullscreenClick();
  }

  actionCloseClick() {
    this.toggleClosed();
    this.props.onActionCloseClick();
  }

  render() {

    let actions = [];
    let actionsWrap;
    let stateClass = (this.state.isMinimized ? ' window--minimized' : '');

    if (this.state.isFullscreen) {
      stateClass += ' window--fullscreen';
    }

    if (this.state.isClosed) {
      stateClass += ' window--closed';
    }

    if (this.props.allowMinimize) {
      actions.push(<button key="action-minimize" className="window__action window__action--minimize" onClick={this.actionMinimizeClick.bind(this)}>-</button>);
    }

    if (this.props.allowFullscreen) {
      actions.push(<button key="action-set-fullscreen" className="window__action window__action--set-fullscreen" onClick={this.actionSetFullscreenClick.bind(this)}>+</button>);
    }

    if (this.props.allowClose) {
      actions.push(<button key="action-close" className="window__action window__action--close" onClick={this.actionCloseClick.bind(this)}>x</button>);
    }

    if (actions.length) {
      actionsWrap = (
        <div className="window__actions">
          {actions}
        </div>
      );
    }

    return (
      <div className={'window' + stateClass}>
        <div className="window__title-bar">
          <div className="window__title">
            {this.props.title}
          </div>
          {actionsWrap}
        </div>
        <div className="window__view">
          {this.props.children}
        </div>
      </div>
    );
  }
}