import { createStore, combineReducers } from "redux";

import userReduce from "./modules/user/reduce";

const reducers = combineReducers({ user: userReduce });

const store = createStore(reducers);

export default store;
