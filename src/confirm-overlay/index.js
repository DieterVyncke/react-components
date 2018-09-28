"use strict";

import React from 'react';
import Overlay from '../overlay/index';
import Confirm from '../confirm/index';

export default class ConfirmOverlay extends React.Component {

  static defaultProps = {
    title: 'Overlayed confirm',
    text: '',
    confirmBtnText: 'Ok',
    cancelBtnText: 'Cancel',
    onConfirm: () => {},
    onCancel: () => {}
  };

  confirm() {
    this.refs['overlay'].close();
    this.props.onConfirm();
  }

  cancel() {
    this.refs['overlay'].close();
    this.props.onCancel();
  }

  render() {
    return (
      <Overlay ref="overlay" allowClose={false} closeOnOverlayClick={false}>
        <Confirm title={this.props.title} text={this.props.text} confirmBtnText={this.props.confirmBtnText} onConfirm={this.confirm.bind(this)} onCancel={this.cancel.bind(this)} />
      </Overlay>
    );
  }
}