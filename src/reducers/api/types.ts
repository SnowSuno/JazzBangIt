import * as actions from "./actions";
import {ActionType} from "typesafe-actions";
import {RoomType} from "../../common/types/dataTypes";

export type ApiAction = ActionType<typeof actions>;

export type ApiState = {
    loading: boolean;
    error: Error | null;
    data: RoomType[];
}