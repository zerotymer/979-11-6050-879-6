import { createAction, handleActions } from 'redux-actions';

/// region Actions
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
/// endregion


/// region Action Creators
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
/// endregion


/// region Reducer
const initialState = {
  number: 0
};

const counter = handleActions({
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 })
}, initialState);
/// endregion

export default counter;
