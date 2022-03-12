import {combineReducers, configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import loginReducer from "./login/loginSlice";
import companiesReducer from "./companies/companiesSlice"
import {takeEvery} from 'redux-saga/effects'
import {signInWorkerSaga, signUpWorkerSaga} from "./login/loginSaga";
import {getCompaniesSaga} from "./companies/companiesSaga";


const rootReducer = combineReducers({
    login: loginReducer,
    companies: companiesReducer,
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
    yield takeEvery('SAGA/SIGN_UP', signUpWorkerSaga);
    yield takeEvery('SAGA/GET_COMPANIES', getCompaniesSaga);
}

sagaMiddleware.run(rootWatcher)


export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch