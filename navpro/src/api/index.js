import axios from "axios";

const baseURL = "http://localhost:8001/leadmaster";

const instance = axios.create({
    baseURL,
});

export default instance;
