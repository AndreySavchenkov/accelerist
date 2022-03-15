import {call, put} from "redux-saga/effects";
import {authApi} from "../../api/api";
import {signIn, signUp} from "./loginSlice";
import {toggleError, toggleSuccessful} from "../notifications/notificationsSlice";
import {wait} from "@testing-library/user-event/dist/utils";
import {getCompaniesAction} from "../companies/companiesSaga";


export function* signInWorkerSaga(action: any):any {
    try{
        const res = yield call(authApi.signIn, action.email, action.password);
        console.log('signIn ->',res.data)
        localStorage.setItem('accessToken', res.data.accessToken)
        yield put(signIn({
            accessToken: res.data.accessToken,
            user: res.data.user,
        }));
        yield put(toggleSuccessful())
        yield call(wait, 5000)
        yield put(toggleSuccessful())
        yield put(getCompaniesAction(1))
    } catch (error) {
        console.log(error)
        yield put(toggleError())
        yield call(wait, 5000)
        yield put(toggleError())
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
        yield put(toggleSuccessful())
        yield call(wait, 5000)
        yield put(toggleSuccessful())
    } catch (error) {
        console.log(error)
        yield put(toggleError())
        yield call(wait, 5000)
        yield put(toggleError())
    }

}

export const signUpAction = (email: string, password: string) => ({
    type: 'SAGA/SIGN_UP',
    email,
    password
})

export function* sendEmailWorkerSaga(action: any):any {
    try{
        yield call(authApi.sendEmail, action.email);
        yield put(toggleSuccessful())
        yield call(wait, 5000)
        yield put(toggleSuccessful())
    }catch(error){
        yield put(toggleError())
        yield call(wait, 5000)
        yield put(toggleError())
    }
}
export const sendEmailAction = (email:string) => ({
    type: 'SAGA/SEND_EMAIL',
    email
})