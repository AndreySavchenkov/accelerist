import {call, put} from "redux-saga/effects";
import {authApi} from "../../api/api";
import {signIn} from "./loginSlice";

export function* signInWorkerSaga(action: any):any {
    const res = yield call(authApi.signIn, action.email, action.password);
    console.log('signIn ->',res.data)
    yield put(signIn({
        accessToken: res.data.accessToken,
        user: res.data.user,
    }));
}

export const signInAction = (email: string, password: string) => ({
    type: 'SAGA/SIGN_IN',
    email,
    password
})