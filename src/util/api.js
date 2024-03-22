import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://65fdc6bab2a18489b38566f7.mockapi.io/api/"
})

export const getProducts = async () => {
    const resp = await axiosInstance.get("/products")
    return resp.data;
}