import { combineReducers } from "redux";
import adminReducer from './Admin/adminReducer';

const reducer = combineReducers({
    admin: adminReducer,
});

export default reducer;