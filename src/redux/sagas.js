import { fork, put, take, call } from "redux-saga/effects";
import {
    getPeopleRequest,
    getPeopleSuccess,
    getPeopleFailure,
} from "./actions";
import { database } from "../config/config";

const peopleRequest = () => fetch(database).then((res) => res.json());

function* peopleSaga() {
    while (true) {
        const action = yield take(getPeopleRequest);
        console.log(action);
        try {
            const result = yield call(peopleRequest);
            console.log(result);
            yield put(getPeopleSuccess(result));
        } catch (error) {
            yield put(getPeopleFailure(error));
        }
    }
}

export function* rootSagas() {
    yield fork(peopleSaga);
}
