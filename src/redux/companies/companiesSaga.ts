import {companiesApi} from "../../api/api";
import {call, put} from "redux-saga/effects";
import {getCompanies} from "./companiesSlice";

export function* getCompaniesSaga(action: any):any {
    try{
        const res = yield call(companiesApi.getCompaies)
        console.log('getCompanies',res.data)
        yield put(getCompanies({companies:res.data.items}))
    } catch(error){
        console.log('getCompaniesSaga error ->',error)
    }
}
export const getCompaniesAction = () => ({type: 'SAGA/GET_COMPANIES'})