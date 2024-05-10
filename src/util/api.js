import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://65fdc6bab2a18489b38566f7.mockapi.io/api/"
})

export const getProducts = async () => {
    const resp = await axiosInstance.get("/products")
    return resp.data;
}

export const postMessage = async body => {
    const resp = await axiosInstance.post("/messages", body)
    return resp.data;
} 

export const postProduct = async body => {
    const resp = await axiosInstance.post("/products", body)
    return resp.data;
} 