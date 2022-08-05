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

const startPlan = async (plan) => {
    const url = "/v1/plan/startPlan";
    const request = await axios.post(baseUrl + url, plan);
    const response = request.data;
    if (response && response.status && response.data) {
        fastingplanStore.setFastingPlan(response.data);
        return true;
    }
    else return false;
}

const updatePlanItemStatus = async (plan) => {
    const userId = userStorage.getUser() ? userStorage.getUser().id : false;
    if (userId) {
        const url = "/v1/plan/update/userId/" + userId;
        const request = await axios.post(baseUrl + url, plan);
        const response = request.data;
        if (response && response.status && response.data) {
            fastingplanStore.setFastingPlan(response.data);
            return true;
        }
    }
    else return false;
}

const getAllPlansByuserId = async () => {
    const userId = userStorage.getUser() ? userStorage.getUser().id : false;
    if (userId) {
        const url = "/v1/plan/all/userId/";
        const request = await axios.get(baseUrl + url + `${userId}`);
        const response = request.data;
        if (response && response.status && response.data && response.data.length > 0) {
            return response.data;
        }
    }
    return false;
}

const ceateNewPlan = async (data) => {
    const userId = userStorage.getUser() ? userStorage.getUser().id : false;
    if (userId) {
        const url = "/v1/plan/add/";
        const request = await axios.post(baseUrl + url, data);
        const response = request.data;
        if (response && response.status && response.data) {
            return true;
        }
    }
    return false;
}

export default {
    getUserPlan,
    getListedPlan,
    startPlan,
    updatePlanItemStatus,
    getAllPlansByuserId,
    ceateNewPlan
}