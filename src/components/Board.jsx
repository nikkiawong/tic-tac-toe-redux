import React from 'react';
import Square from './Square';
import { connect } from 'react-redux';

class Board extends React.Component {
  renderSquare(i) {
    // onClick getting called successfully
    return <Square value={this.props[i]}
      onClick={() => this.props.onClick(i)}/>;
  }

  render() {
    return (
      <div>
        <style jsx>{`
          .board-row {
            background-color: blue;
            display: flex;
            flex-wrap: wrap;
          }`}</style>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default connect()(Board);
