import {combineReducers, configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import loginReducer from "./login/loginSlice";
import {takeEvery} from 'redux-saga/effects'
import {signInWorkerSaga} from "./login/loginSaga";


const rootReducer = combineReducers({
    login: loginReducer,
})

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(sagaMiddleware),
})

function* rootWatcher() {
    yield takeEvery('SAGA/SIGN_IN', signInWorkerSaga);
}

sagaMiddleware.run(rootWatcher)


export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch