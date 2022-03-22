import axios from "axios";
import {instance} from "../components/Search/containers/find/SearchFoundPanel";

export const authApi = {
    signIn(email: string, password: string) {
        return axios.post("https://accelerist.herokuapp.com/api/v1/auth/sign_in", {email, password})
    },
    signUp(email: string, password: string) {
        return axios.post("https://accelerist.herokuapp.com/api/v1/auth/sign_up", {email, password})
    },
    sendEmail(email: string) {
        return axios.post("https://accelerist.herokuapp.com/api/v1/auth/change_password/send_mail", {email})
    },
}

export const companiesApi = {
    getCompanies(currentPage: number) {
        return instance.get(`/companies?page=${currentPage}&limit=6`)
    },
    getFavoriteCompanies(currentPage: number) {
        return instance.get(`/companies/favorites?page=${currentPage}&limit=6`)
    },
    doLikeCompany(companyId: string){
        return instance.get(`/companies/${companyId}/like`)
    },
    doDislikeCompany(companyId: string){
        return instance.get(`/companies/${companyId}/dislike`)
    },
    getCompany(companyId: string){
        return instance.get(`/companies/${companyId}`)
    }
}