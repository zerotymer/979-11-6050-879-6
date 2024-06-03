import { createAction, handleActions } from 'redux-actions';

/// region Action Types
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
/// endregion


/// region Action Creators
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
/// endregion


/// region Thunk
export const increaseAsync = () => (dispatch) => {
    setTimeout(() => dispatch(increase()), 1000);
};
export const decreaseAsync = () => (dispatch) => {
    setTimeout(() => dispatch(decrease()), 1000);
};
/// endregion

/// region Reducer
const initialState = 0;
const counter = handleActions({
    [INCREASE]: state => state + 1,
    [DECREASE]: state => state - 1
}, initialState);
/// endregion

export default counter;