import {combineReducers, configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import loginReducer from "./login/loginSlice";
import companiesReducer from "./companies/companiesSlice"
import {takeEvery} from 'redux-saga/effects'
import {sendEmailWorkerSaga, signInWorkerSaga, signUpWorkerSaga} from "./login/loginSaga";
import {getCompaniesSaga} from "./companies/companiesSaga";
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
import notificationsSlice from "./notifications/notificationsSlice";


const rootReducer = combineReducers({
    login: loginReducer,
    companies: companiesReducer,
    notifications: notificationsSlice,
})

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(sagaMiddleware),
})
export const persistor = persistStore(store);
function* rootWatcher() {
    yield takeEvery('SAGA/SIGN_IN', signInWorkerSaga);
    yield takeEvery('SAGA/SIGN_UP', signUpWorkerSaga);
    yield takeEvery('SAGA/GET_COMPANIES', getCompaniesSaga);
    yield takeEvery('SAGA/SEND_EMAIL', sendEmailWorkerSaga);
}

sagaMiddleware.run(rootWatcher)


export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch