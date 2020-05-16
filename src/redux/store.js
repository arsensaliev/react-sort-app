import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleWare from "redux-saga";

const initialState = [];
const sagaMiddleWare = createSagaMiddleWare();

const createAppStore = () => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(sagaMiddleWare),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : (noop) => noop
        )
    );

    return store;
};

export default createAppStore;