import React from 'react';
import Board from './Board';
import { connect } from 'react-redux';

class Game extends React.Component {

  handleClick(i) { //being called successfully, i = the square clicked
    // console.log(this.props.defaultState);
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    console.log(history   );
    const squares = current.slice();
    // if (calculateWinner(squares) || squares[i]) {
    //   return;
    // }
    squares[i] = this.props.xIsNext ? 'X' : 'O'; // this is trying to find xIsNext in this constructor vs the store
    console.log(this.props.xIsNext);
    const { dispatch } = this.props;
    const action = {
      type: 'SWITCH_PLAYER',
      xIsNext: true
    };
    dispatch(action);
  }

  // jumpTo(step) {
  //   this.setState({
  //     stepNumber: step,
  //     xIsNext: (step % 2) === 0,
  //   });
  // }

  render(props) {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
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
      <div>
        <style jsx>{`
            .game {
              display: flex;
              flex-direction: row;
            }

            .game-info {
              margin-left: 20px;
            }`}</style>
        <div className="game">
          <div className="game-board">
            <Board
              squares={current}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      </div>
    );
  }
}

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

const mapStateToProps = state => {
  return {
    history: state.history,
    stepNumber: state.stepNumber,
    xISNext: state.xIsNext
  };
};

export default connect(mapStateToProps)(Game);
