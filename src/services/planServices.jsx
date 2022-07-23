import axios from 'axios';
import config from '../config';
import fastingplanStore from '../localStorage/fastingplanStore';
import userStorage from '../localStorage/userStorage';


const baseUrl = config.configurations();

const getUserPlan = async () => {
    const userId = userStorage.getUser() ? userStorage.getUser().id : false;
    if (userId) {
        const url = "/v1/plan/userId/";
        const request = await axios.get(baseUrl + url + `${userId}`);
        const response = request.data;
        if (response && response.status && response.data) {
            fastingplanStore.setFastingPlan(response.data);
            return response.data;
        }
    }
    return false;
}

const getListedPlan = async (pageNo) => {
    const url = "/v1/plan/page/";
    const request = await axios.get(baseUrl + url + pageNo);
    const response = request.data;
    if (response && response.status && response.data) {
        return response.data;
    }
}

export default {
    getUserPlan,
    getListedPlan
}