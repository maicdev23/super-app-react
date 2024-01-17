import axios from "axios"
import Cookies from "js-cookie"

const API = 'http://localhost:4000/api/v1'

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