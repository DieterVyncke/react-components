"use strict";

class Alert extends React.Component {

  static defaultProps = {
    title: 'Alert',
    text: '',
    confirmBtnText: 'Ok',
    onConfirm: () => {}
  };

  confirm() {
    this.refs['window'].close();
    this.props.onConfirm();
  }

  render() {

    let text;

    if (this.props.text) {
      text = (
        <div className="alert__text">
          {this.props.text}
        </div>
      );
    }

    return (
      <div className="alert">
        <Window ref="window" title={this.props.title} allowMinimize={false} allowFullscreen={false} allowClose={false}>
          <div className="alert__view">
            {text}
            <div className="alert__footer">
              <button className="btn btn--confirm" onClick={this.confirm.bind(this)}>{this.props.confirmBtnText}</button>
            </div>
          </div>
        </Window>
      </div>
    );
  }
}

// Example

const socketEl = document.querySelector('#socket');
ReactDOM.render(<Alert text="Could not complete your request." onConfirm={e => alert('Confirm')} />, socketEl);