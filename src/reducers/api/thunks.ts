import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {ApiAction} from "./types";
import {getApiData} from "../../common/api/syncroom";
import {getDataAsync} from "./actions";
import {filterData} from "../../common/api/filter";

export function getData(keywords: string[]): ThunkAction<Promise<void>, RootState, null, ApiAction> {
    return async dispatch => {
        const {request, success, failure} = getDataAsync;
        dispatch(request());

        try {
            const data = await getApiData();
            const filteredData = filterData(data, keywords);

            dispatch(success(filteredData));
        } catch (e: any) {
            dispatch(failure(e));
        }
    };
}