import {} from "redux-saga/effects";
import {
    getPeopleRequest,
    getPeopleSuccess,
    getPeopleFailure,
} from "./actions";
import { database } from "../config/config";

const peopleRequest = (data) => fetch(database).then((res) => res.json());

export function* rootSagas() {}
