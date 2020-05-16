import {
    getPeopleRequest,
    getPeopleSuccess,
    getPeopleFailure,
} from "./actions";

import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

const isLoading = handleActions(
    {
        [getPeopleRequest]: () => true,
        [getPeopleSuccess]: () => false,
        [getPeopleFailure]: () => false,
    },
    false
);

const people = handleActions(
    {
        [getPeopleRequest]: () => [],
        [getPeopleSuccess]: (state, action) => action.payload,
    },
    []
);

const error = handleActions(
    {
        [getPeopleRequest]: () => null,
        [getPeopleFailure]: (state, action) => action.payload,
    },
    null
);

export default combineReducers({
    isLoading,
    people,
    error,
});
