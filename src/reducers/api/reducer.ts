import {createReducer} from "typesafe-actions";
import {ApiState, ApiAction} from "./types";
import {GET_DATA, GET_DATA_SUCCESS, GET_DATA_ERROR} from "./actions";

const initialState: ApiState = {
    loading: false,
    error: null,
    data: []
};

const api = createReducer<ApiState, ApiAction>(initialState, {
    [GET_DATA]: state => ({
        ...state,
        loading: true,
        error: null,
    }),
    [GET_DATA_SUCCESS]: (state, action) => ({
        loading: false,
        error: null,
        data: action.payload,
    }),
    [GET_DATA_ERROR]: (state, action) => ({
        loading: false,
        error: action.payload,
        data: []
    })
});

export default api;
