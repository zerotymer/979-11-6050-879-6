import { createAction, handleActions } from "redux-actions";
import createRequestThunk from "../lib/createRequestThunk";
import * as api from "../lib/api";

/// region Action Types
const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";
/// endregion


/// region Thunk Creators
export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);
/// endregion


/// region Reducer
const initialState = {
    post: null,
    users: null
};
const sample = handleActions({
    [GET_POST_SUCCESS]: (state, action) => ( { ...state, post: action.payload } ),
    [GET_USERS_SUCCESS]: (state, action) => ( { ...state, users: action.payload } ),
}, initialState);
/// endregion


export default sample;