import { createAction, handleActions } from 'redux-actions';

/// region Action Types
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
/// endregion


/// region Action Creators
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
/// endregion


/// region Reducer
const initialState = 0;
const counter = handleActions({
    [INCREASE]: state => state + 1,
    [DECREASE]: state => state - 1
}, initialState);
/// endregion

export default counter;