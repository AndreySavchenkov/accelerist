import {call, put} from "redux-saga/effects";
import {authApi} from "../../api/api";
import {signIn, signUp} from "./loginSlice";
import {useNavigate} from "react-router-dom";

export function* signInWorkerSaga(action: any):any {
    try{
        const res = yield call(authApi.signIn, action.email, action.password);
        console.log('signIn ->',res.data)
        localStorage.setItem('accessToken', res.data.accessToken)
        yield put(signIn({
            accessToken: res.data.accessToken,
            user: res.data.user,
        }));
    } catch (error) {
        console.log(error)
    }

}

export const signInAction = (email: string, password: string) => ({
    type: 'SAGA/SIGN_IN',
    email,
    password
})

export function* signUpWorkerSaga(action: any):any {
    try{
        const res = yield call(authApi.signUp, action.email, action.password);
        console.log('signUp ->',res.data)
        localStorage.setItem('accessToken', res.data.accessToken)
        yield put(signUp({
            accessToken: res.data.accessToken,
            user: res.data.user,
        }));
    } catch (error) {
        console.log(error)
    }

}

export const signUpAction = (email: string, password: string) => ({
    type: 'SAGA/SIGN_UP',
    email,
    password
})