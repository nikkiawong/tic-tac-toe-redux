import React from 'react';
import Square from './Square';

class Board extends React.Component {
  renderSquare(i) { //
    console.log(this.props);
    return <Square value={this.props.squares[i]}
    onClick={() => this.props.onClick(i)}/>;
  }

  render() {
    return (
      <div>
        <style jsx>{`
          body {
            font: 14px "Century Gothic", Futura, sans-serif;
            margin: 20px;
          }

          ol, ul {
            padding-left: 30px;
          }

          .board-row:after {
            clear: both;
            content: "";
            display: table;
          }

          .status {
            margin-bottom: 10px;
          }

          .square {
            background: #fff;
            border: 1px solid #999;
            float: left;
            font-size: 24px;
            font-weight: bold;
            line-height: 34px;
            height: 34px;
            margin-right: -1px;
            margin-top: -1px;
            padding: 0;
            text-align: center;
            width: 34px;
          }

          .square:focus {
            outline: none;
          }

          .kbd-navigation .square:focus {
            background: #ddd;
          }

          .game {
            display: flex;
            flex-direction: row;
          }

          .game-info {
            margin-left: 20px;
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

export default Board;
