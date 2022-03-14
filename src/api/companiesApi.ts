import axios from "axios";

const instance = axios.create({
    baseURL: `https://accelerist.herokuapp.com/api/v1`,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
})

export const companiesApi = {
    getCompanies(currentPage:number) {
        return instance.get(`/companies?page=${currentPage}&limit=6`)
    }
}