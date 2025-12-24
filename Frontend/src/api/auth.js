import axios from "axios"

const instance = axios.create({
    baseURL:"http://localhost:4000/api",
    withCredentials:true
})

export const registerRequest = (user) => instance.post(`/register`, user)
export const loginRequest = (user) => instance.post(`/login`, user)
export const verifyTokenRequest = () => instance.get(`/verify`)