import axios from "axios";

const token = localStorage.getItem('accessToken')

const instance = axios.create({
    baseURL: `https://accelerist.herokuapp.com/api/v1`,
    headers: {
        'Authorization': `Bearer ${token}`
    },
})

export const authApi = {
    signIn(email: string, password: string) {
        return axios.post("https://accelerist.herokuapp.com/api/v1/auth/sign_in", {email, password})
    },
    signUp(email: string, password: string) {
        return axios.post("https://accelerist.herokuapp.com/api/v1/auth/sign_up", {email, password})
    },
}

export const companiesApi = {
    getCompaies(currentPage:number) {
        return instance.get(`/companies?page=${currentPage}&limit=6`)
    }
}