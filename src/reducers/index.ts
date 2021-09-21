import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

import api from "./api";
import keyword from "./keyword";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["keyword"]
};

const rootReducer = combineReducers({
    api,
    keyword,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
