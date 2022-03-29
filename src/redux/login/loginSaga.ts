import { wait } from '@testing-library/user-event/dist/utils';
import { call, put } from 'redux-saga/effects';

import { signIn, signUp } from './loginSlice';

import { authApi } from 'api/api';
import { ONE } from 'constance';
import { getCompaniesAction } from 'redux/companies/companiesSaga';
import { toggleError, toggleSuccessful } from 'redux/notifications/notificationsSlice';

export function* signInWorkerSaga(action: any): any {
  try {
    const res = yield call(authApi.signIn, action.email, action.password);
    localStorage.setItem('accessToken', res.data.accessToken);
    yield put(
      signIn({
        accessToken: res.data.accessToken,
        user: res.data.user,
      }),
    );
    yield put(toggleSuccessful());
    yield call(wait, 5000);
    yield put(toggleSuccessful());
    yield put(getCompaniesAction(ONE));
  } catch (error) {
    console.log(error);
    yield put(toggleError());
    yield call(wait, 5000);
    yield put(toggleError());
  }
}

export const signInAction = (email: string, password: string): any => ({
  type: 'SAGA/SIGN_IN',
  email,
  password,
});

export function* signUpWorkerSaga(action: any): any {
  try {
    const res = yield call(authApi.signUp, action.email, action.password);
    localStorage.setItem('accessToken', res.data.accessToken);
    yield put(
      signUp({
        accessToken: res.data.accessToken,
        user: res.data.user,
      }),
    );
    yield put(toggleSuccessful());
    yield call(wait, 5000);
    yield put(toggleSuccessful());
  } catch (error) {
    console.log(error);
    yield put(toggleError());
    yield call(wait, 5000);
    yield put(toggleError());
  }
}

export const signUpAction = (email: string, password: string): any => ({
  type: 'SAGA/SIGN_UP',
  email,
  password,
});

export function* sendEmailWorkerSaga(action: any): any {
  try {
    yield call(authApi.sendEmail, action.email);
    yield put(toggleSuccessful());
    yield call(wait, 5000);
    yield put(toggleSuccessful());
  } catch (error) {
    yield put(toggleError());
    yield call(wait, 5000);
    yield put(toggleError());
  }
}

export const sendEmailAction = (email: string): any => ({
  type: 'SAGA/SEND_EMAIL',
  email,
});
