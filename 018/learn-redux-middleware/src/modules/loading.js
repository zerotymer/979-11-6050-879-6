import { createAction, handleActions } from "redux-actions";

/// region Action Types
const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";
/// endregion


/// region Action Creators
export const startLoading = createAction(START_LOADING, requestType => requestType);
export const finishLoading = createAction(FINISH_LOADING, requestType => requestType);
/// endregion


/// region Reducer
const initialState = {};
// 액션 타입을 payload로 설정하여, 어떤 요청이 시작되었는지 알 수 있게 한다.
const loading = handleActions({
    [START_LOADING]: (state, action) => ({ ...state, [action.payload]: true }),
    [FINISH_LOADING]: (state, action) => ({ ...state, [action.payload]: false })
}, initialState);
/// endregion

export default loading;
