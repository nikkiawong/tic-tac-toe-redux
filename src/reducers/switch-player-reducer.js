export default(state = {}, action) => {
  switch (action.type){
    let xIsNext;
    case 'SWITCH_PLAYER':
      xIsNext ? 'X' : 'O';
      return action.xIsNext;
    default:
      return true;
  }
};
