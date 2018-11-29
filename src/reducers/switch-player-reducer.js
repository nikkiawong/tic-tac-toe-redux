export default(state = {}, action) => {
  switch (action.type){
    case 'SWITCH_PLAYER':
      let xIsNext = true;
      xIsNext = !action.xIsNext;
      console.log(xIsNext);
      return xIsNext;
    default:
      return state;
  }
};
