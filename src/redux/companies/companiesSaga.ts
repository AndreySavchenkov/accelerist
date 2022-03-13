import {companiesApi} from "../../api/api";
import {call, put} from "redux-saga/effects";
import {getCompanies} from "./companiesSlice";

export function* getCompaniesSaga(action: any):any {
    try{
        const res = yield call(companiesApi.getCompaies, action.currentPage)
        console.log('getCompanies',res.data)
        yield put(getCompanies({companies:res.data.items,meta:res.data.meta}))
    } catch(error){
        console.log('getCompaniesSaga error ->',error)
    }
}
export const getCompaniesAction = (currentPage: number) => ({type: 'SAGA/GET_COMPANIES', currentPage})