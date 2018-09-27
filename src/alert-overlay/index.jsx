"use strict";

class AlertOverlay extends React.Component {

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

// Example

const socketEl = document.querySelector('#socket');
ReactDOM.render(<AlertOverlay text="Could not complete your request." onConfirm={e => alert('Confirm')} />, socketEl);