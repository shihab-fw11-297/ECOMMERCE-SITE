import axios from "axios"

const BaseUrl="http://localhost:5000/";
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL:BaseUrl
})

export const userRequest = axios.create({
    baseURL:BaseUrl,
    headers:{token:TOKEN}
})