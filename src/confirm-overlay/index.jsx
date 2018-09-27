"use strict";

class ConfirmOverlay extends React.Component {

  static defaultProps = {
    title: 'Overlay',
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

// Example

const socketEl = document.querySelector('#socket');
ReactDOM.render(<ConfirmOverlay title="Delete" text="Are you sure?" onConfirm={e => alert('Confirm')} onCancel={e => alert('Cancel')} />, socketEl);