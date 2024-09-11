import axios from "axios"
import Cookies from "js-cookie"

const API = 'https://dev-api-rest.onrender.com/api'

export const getPostsRequest = () => {
    return axios.get(`${API}/post`, {
        headers: {
            'x-access-token': Cookies.get('token')
        }
    })
}

export const getPostRequest = (id) => {
    return axios.get(`${API}/post/${id}`, {
        headers: {
            'x-access-token': Cookies.get('token')
        }
    })
}

export const addPostRequest = (data) => {
    return axios.post(`${API}/post`, data, {
        headers: {
            'x-access-token': Cookies.get('token'),
            'Content-Type': 'multipart/form-data'
        }
    })
}

export const updatePostRequest = (id, data) => {
    return axios.put(`${API}/post/${id}`, data, {
        headers: {
            'x-access-token': Cookies.get('token'),
            'Content-Type': 'multipart/form-data'
        }
    })
}

export const removePostRequest = async (id) => {
    return axios.delete(`${API}/post/${id}`, {
        headers: {
            'x-access-token': Cookies.get('token')
        }
    })
}