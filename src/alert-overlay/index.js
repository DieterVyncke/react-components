"use strict";

import React from 'react';
import Alert from '../alert/index';
import Overlay from '../overlay/index';

export default class AlertOverlay extends React.Component {

  static defaultProps = {
    title: 'Alert',
    text: '',
    confirmBtnText: 'Ok',
    onConfirm: () => {}
  };

  confirm() {
    this.refs['overlay'].close();
    this.props.onConfirm();
  }

  render() {
    return (
      <Overlay ref="overlay" allowClose={false} closeOnOverlayClick={false}>
        <Alert title={this.props.title} text={this.props.text} confirmBtnText={this.props.confirmBtnText} onConfirm={this.confirm.bind(this)} />
      </Overlay>
    );
  }
}