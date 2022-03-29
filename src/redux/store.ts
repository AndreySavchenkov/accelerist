import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';

import {
  doDislikeCompanyWorkerSaga,
  doLikeCompanyWorkerSaga,
  getCompaniesWorkerSaga,
  getCompanyByIdWorkerSaga,
  getFavoriteCompaniesWorkerSaga,
} from './companies/companiesSaga';
import companiesSlice from './companies/companiesSlice';
import {
  sendEmailWorkerSaga,
  signInWorkerSaga,
  signUpWorkerSaga,
} from './login/loginSaga';
import loginSlice from './login/loginSlice';
import notificationsSlice from './notifications/notificationsSlice';

const rootReducer = combineReducers({
  login: loginSlice,
  companies: companiesSlice,
  notifications: notificationsSlice,
});

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});
export const persistor = persistStore(store);

function* rootWatcher(): any {
  yield takeEvery('SAGA/SIGN_IN', signInWorkerSaga);
  yield takeEvery('SAGA/SIGN_UP', signUpWorkerSaga);
  yield takeEvery('SAGA/SEND_EMAIL', sendEmailWorkerSaga);

  yield takeEvery('SAGA/GET_COMPANIES', getCompaniesWorkerSaga);
  yield takeEvery('SAGA/GET_COMPANY_BY_ID', getCompanyByIdWorkerSaga);

  yield takeEvery('SAGA/GET_FAVORITES_COMPANIES', getFavoriteCompaniesWorkerSaga);
  yield takeEvery('SAGA/DO_LIKE_COMPANY', doLikeCompanyWorkerSaga);
  yield takeEvery('SAGA/DO_DISLIKE_COMPANY', doDislikeCompanyWorkerSaga);
}

sagaMiddleware.run(rootWatcher);

export type RootStateT = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
