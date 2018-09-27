"use strict";

class Overlay extends React.Component {

  static defaultProps = {
    allowClose: true,
    closeOnOverlayClick: true,
    onClose: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      isClosed: false
    };
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

  overlayClick(e) {

    this.close();
  }

  render() {

    let stateClass = '';
    let header;

    if (this.state.isClosed) {
      stateClass += ' overlay--closed';
    }

    if (this.props.allowClose) {
      header = (
        <div className="overlay__header">
          <button className="overlay__close" onClick={this.close.bind(this)}>x</button>
        </div>
      );
    }

    return (
      <div className={'overlay' + stateClass}>
        <div className="overlay__wrap">
          {header}
          <div className="overlay__view" onClick={this.props.closeOnOverlayClick ? (e => this.overlayClick(e)) : ''}>
            <div className="overlay__view-box" onClick={e => e.stopPropagation()}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Example

const socketEl = document.querySelector('#socket');
ReactDOM.render(<Overlay onClose={e => alert('Close')}>Example content</Overlay>, socketEl);