"use strict";

import React from 'react';
import Window from '../window/index';

export default class Confirm extends React.Component {

  static defaultProps = {
    title: 'Confirm',
    text: '',
    confirmBtnText: 'Ok',
    cancelBtnText: 'Cancel',
    onConfirm: () => {},
    onCancel: () => {}
  };

  confirm() {
    this.refs['window'].close();
    this.props.onConfirm();
  }

  cancel() {
    this.refs['window'].close();
    this.props.onCancel();
  }

  render() {

    let text;

    if (this.props.text) {
      text = (
        <div className="confirm__text">
          {this.props.text}
        </div>
      );
    }

    return (
      <div className="confirm">
        <Window ref="window" title={this.props.title} allowMinimize={false} allowFullscreen={false} onActionCloseClick={this.props.onCancel}>
          <div className="confirm__view">
            {text}
            <div className="confirm__footer">
              <button className="btn btn--confirm" onClick={this.confirm.bind(this)}>{this.props.confirmBtnText}</button>
              <button className="btn btn--cancel" onClick={this.cancel.bind(this)}>{this.props.cancelBtnText}</button>
            </div>
          </div>
        </Window>
      </div>
    );
  }
}