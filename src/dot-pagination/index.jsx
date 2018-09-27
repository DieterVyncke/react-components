"use strict";

class DotPagination extends React.Component {

  static defaultProps = {
    amount: 1,
    onGoTo: (index) => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  goTo(index, emitEvent = true) {

    if (index >= 0 && index < this.props.amount) {
      this.setState({
        activeIndex: index
      });

      if (emitEvent) {
        this.props.onGoTo(index);
      }
    }
  }

  render() {

    let dots = [];

    for (let i = 0; i < this.props.amount; i++) {
      dots.push(
        <div key={i} className={'dot-pagination__item' + (this.state.activeIndex === i ? ' dot-pagination__item--active' : '')}>
          <button className="dot-pagination__btn" onClick={e => this.goTo(i)}>
            {i+1}
          </button>
        </div>
      );
    }

    return (
      <div className="dot-pagination">
        {dots}
      </div>
    );
  }
}

// Example

const socketEl = document.querySelector('#dot-pagination');

if (socketEl) {
  ReactDOM.render(<DotPagination amount="10" />, socketEl);
}