import { createAction } from "redux-actions";
import { peopleRequest, peopleSuccess, peopleFailure } from "./types";

export const getPeopleRequest = createAction(peopleRequest);
export const getPeopleSuccess = createAction(peopleSuccess);
export const getPeopleFailure = createAction(peopleFailure);