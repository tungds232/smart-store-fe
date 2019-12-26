import axios from "axios";

const instance = axios.create({
    //baseURL: "https://smart-store-7bb43.firebaseio.com"
    baseURL: "http://192.168.0.123:30003"
});

export default instance;
