import {createAsyncAction} from "typesafe-actions";
import {AxiosError} from "axios";

import {RoomType} from "../../common/types/dataTypes";

export const GET_DATA = "api/GET_DATA";
export const GET_DATA_SUCCESS = "api/GET_DATA_SUCCESS";
export const GET_DATA_ERROR = "api/GET_DATA_ERROR";

export const getDataAsync = createAsyncAction(
    GET_DATA,
    GET_DATA_SUCCESS,
    GET_DATA_ERROR
)<undefined, RoomType[], AxiosError>();
