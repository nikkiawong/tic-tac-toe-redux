import defaultState from './defaultState';

export default(state = defaultState, action) => {
  switch (action.type){
  case 'SWITCH_PLAYER':
    let xIsNext;
    xIsNext = !state.xIsNext;
    console.log(xIsNext);
    return xIsNext;
  default:
    return state;
  }
};
