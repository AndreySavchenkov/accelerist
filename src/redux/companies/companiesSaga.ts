import {companiesApi} from "api/api";
import {call, put} from "redux-saga/effects";
import {getCompanies, getFavoriteCompanies} from "./companiesSlice";

export function* getCompaniesSaga(action: any):any {
    try{
        const res = yield call(companiesApi.getCompanies, action.currentPage)
        console.log('getCompanies',res.data)
        yield put(getCompanies({companies:res.data.items,meta:res.data.meta}))
    } catch(error){
        console.log('getCompaniesSaga error ->',error)
    }
}
export const getCompaniesAction = (currentPage: number) => ({type: 'SAGA/GET_COMPANIES', currentPage})

export function* getFavoriteCompaniesSaga(action: any):any {
    try{
        const res = yield call(companiesApi.getFavoriteCompanies, action.currentPage)
        console.log('getCompanies',res.data)
        yield put(getFavoriteCompanies({companies:res.data.items,meta:res.data.meta}))
    } catch(error){
        console.log('getFavoriteCompaniesSaga error ->',error)
    }
}
export const getFavoriteCompaniesAction = (currentPage: number) => ({type: 'SAGA/GET_FAVORITES_COMPANIES', currentPage})