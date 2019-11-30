import axios from "axios";

const instance = axios.create({
    baseURL: "https://smart-store-7bb43.firebaseio.com"
});

export default instance;