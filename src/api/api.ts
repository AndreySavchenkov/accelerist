import axios from "axios";

export const authApi = {
    signIn(email: string, password: string) {
        return axios.post("https://accelerist.herokuapp.com/api/v1/auth/sign_in", {email, password})
    },
    signUp(email: string, password: string) {
        return axios.post("https://accelerist.herokuapp.com/api/v1/auth/sign_up", {email, password})
    },
}