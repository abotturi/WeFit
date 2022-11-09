import axios from "axios";

const instanceAxios = axios.create({
    baseURL: 'https://api.github.com/',
});

export default instanceAxios