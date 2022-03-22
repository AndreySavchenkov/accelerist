import {companiesApi} from "api/api";
import {call, put} from "redux-saga/effects";
import {
    doDislikeCompany,
    doLikeCompany,
    getCompanies,
    getCompanyById,
    getFavoriteCompanies
} from "./companiesSlice";

export function* getCompaniesWorkerSaga(action: any): any {
    try {
        const res = yield call(companiesApi.getCompanies, action.currentPage)
        console.log('getCompanies', res.data)
        yield put(getCompanies({companies: res.data.items, meta: res.data.meta}))
    } catch (error) {
        console.log('getCompaniesWorkerSaga error ->', error)
    }
}

export const getCompaniesAction = (currentPage: number) => ({type: 'SAGA/GET_COMPANIES', currentPage})

export function* getFavoriteCompaniesWorkerSaga(action: any): any {
    try {
        const res = yield call(companiesApi.getFavoriteCompanies, action.currentPage)
        console.log('getCompanies', res.data)
        yield put(getFavoriteCompanies({companies: res.data.items, meta: res.data.meta}))
    } catch (error) {
        console.log('getFavoriteCompaniesWorkerSaga error ->', error)
    }
}

export const getFavoriteCompaniesAction = (currentPage: number) => ({type: 'SAGA/GET_FAVORITES_COMPANIES', currentPage})

export function* doLikeCompanyWorkerSaga(action: any): any {
    try {
        yield call(companiesApi.doLikeCompany, action.companyId)
        yield put(doLikeCompany({companyId:action.companyId}))
    } catch (error) {
        console.log('doLikeCompanies error ->', error)
    }
}

export const doLikeCompanyAction = (companyId: string) => ({type: 'SAGA/DO_LIKE_COMPANY', companyId});

export function* doDislikeCompanyWorkerSaga(action: any): any {
    try {
        yield call(companiesApi.doDislikeCompany, action.companyId)
        yield put(doDislikeCompany({companyId:action.companyId}))
        const res = yield call(companiesApi.getFavoriteCompanies, 1)
        console.log('getCompanies', res.data)
        yield put(getFavoriteCompanies({companies: res.data.items, meta: res.data.meta}))
    } catch (error) {
        console.log('doLikeCompanies error ->', error)
    }
}

export const doDislikeCompanyAction = (companyId: string) => ({type: 'SAGA/DO_DISLIKE_COMPANY', companyId});

export function* getCompanyByIdWorkerSaga(action: any): any {
    try {
        const res = yield call(companiesApi.getCompany, action.companyId)
        yield put(getCompanyById({company: res.data}) )
        console.log('getCompanyById', res.data)
    } catch (error) {
        console.log('doLikeCompanies error ->', error)
    }
}

export const getCompanyByIdAction = (companyId: string) => ({type: 'SAGA/GET_COMPANY_BY_ID', companyId});