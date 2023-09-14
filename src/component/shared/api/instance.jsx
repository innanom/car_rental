import axios from "axios";

const instance = axios.create({
    baseURL: "https://649a057279fbe9bcf8403de5.mockapi.io/"
});

export const getCars = async (page) => {
    try {
        const { data } = await instance.get(`/cars?page=${page}&limit=8`);
        return data.results;
    } catch (error) {
        return error.message;
}
}