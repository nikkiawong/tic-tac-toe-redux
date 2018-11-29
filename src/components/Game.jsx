import React from 'react';
import Board from './Board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  // handleClick(i) {
  //   const history = this.state.history.slice(0, this.state.stepNumber + 1);
  //   const current = history[history.length - 1];
  //   const squares = current.squares.slice();
  //   if (calculateWinner(squares) || squares[i]) {
  //     return;
  //   }
  //   squares[i] = this.state.xIsNext ? 'X' : 'O';
  //   this.setState({
  //     history: history.concat([{
  //       squares: squares,
  //     }]),
  //     stepNumber: history.length,
  //     xIsNext: !this.state.xIsNext,
  //   });
  // }

  // jumpTo(step) {
  //   this.setState({
  //     stepNumber: step,
  //     xIsNext: (step % 2) === 0,
  //   });
  // }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    // const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <div>
          <h2>This is the Game Compo</h2>
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        </div>
      );
    });

    // let status;
    // if (winner) {
    //   status = 'Winner: ' + winner;
    // } else {
    //   status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    // }

    return (
      <div className="game">
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
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
