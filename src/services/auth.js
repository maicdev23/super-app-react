import axios from "axios"
import Cookies from "js-cookie"

const API = 'https://dev-api-rest.onrender.com/api'

export const authUser = (user) => {
    return axios.post(`${API}/auth`, user)
}

export const mainUser = () => {
    return axios.get(`${API}/main`, {
        headers: {
            'x-access-token': Cookies.get('token')
        }
    })
}