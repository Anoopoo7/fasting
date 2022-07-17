import axios from 'axios';
import config from '../config';
import userStorage from '../localStorage/userStorage';


const baseUrl = config.configurations();

const login = async (data) => {
    const url = "/v1/user/login";
    const request = await axios.post(baseUrl + url, data);
    const response = request.data;
    if (response && response.status && response.data) {
        userStorage.setUser(response.data)
        return true;
    }
    return false;
}
const register = async (data) => {
    const url = "/v1/user/register";
    const request = await axios.post(baseUrl + url, data);
    const response = request.data;
    if (response && response.status && response.data) {
        userStorage.setUser(response.data)
        return true;
    }
    return false;
}
const editProfile = async (data) => {
    const url = "/v1/user/edit";
    const request = await axios.post(baseUrl + url, data);
    const response = request.data;
    if (response && response.status && response.data) {
        userStorage.setUser(response.data)
        return true;
    }
    return false;
}

const uploadPhoto = async (data) => {
    const url = "/v1/user/photo";
    const request = await axios.post(baseUrl + url, data);
    const response = request.data;
    if (response && response.status && response.data) {
        userStorage.setUser(response.data)
        return true;
    }
    return false;
}

export default {
    login,
    register,
    editProfile,
    uploadPhoto
}
