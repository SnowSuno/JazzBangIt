import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {ApiAction} from "./types";
import {getApiData} from "../../common/api/syncroom";
import {getDataAsync} from "./actions";

export function getRoomsThunk(): ThunkAction<Promise<void>, RootState, null, ApiAction> {
    return async dispatch => {
        const {request, success, failure} = getDataAsync;
        dispatch(request());

        try {
            const data = await getApiData();
            dispatch(success(data));
        } catch (e: any) {
            dispatch(failure(e));
        }
    };
}