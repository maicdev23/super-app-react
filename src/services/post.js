import axios from "axios"
import Cookies from "js-cookie"

const API = 'http://localhost:4000/api/v1'

export const getPostsRequest = () => {
    return axios.get(`${API}/movie`, {
        headers: { 
            'x-access-token': Cookies.get('token')
        }
    })
}

export const getPostRequest = (id) => {
    return axios.get(`${API}/movie/${id}`, {
        headers: { 
            'x-access-token': Cookies.get('token')
        }
    })
}

export const addPostRequest = (data) => {
    return axios.post(`${API}/movie`, data, {
        headers: { 
            'x-access-token': Cookies.get('token'),
            'Content-Type': 'multipart/form-data'
        }
    })
}

export const updatePostRequest = (id, data) => {
    return axios.put(`${API}/movie/${id}`, data, {
        headers: { 
            'x-access-token': Cookies.get('token'),
            'Content-Type': 'multipart/form-data'
        }
    })
}

export const removePostRequest = async (id) => {
    return axios.delete(`${API}/movie/${id}`, {
        headers: { 
            'x-access-token': Cookies.get('token')
        }
    })
}