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
        yield take(getPeopleRequest);
        try {
            const result = yield call(peopleRequest);
            yield put(getPeopleSuccess(result));
        } catch (error) {
            yield put(getPeopleFailure(error));
        }
    }
}

export default function* rootSagas() {
    yield fork(peopleSaga);
}
