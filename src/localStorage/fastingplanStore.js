const setFastingPlan = (plan) => {
    window.localStorage.setItem("activePlan", JSON.stringify(plan));
}

const getFastingPlan = () => {
    return JSON.parse(window.localStorage.getItem("activePlan") || "false")
}
const deletePlan = () => {
    window.localStorage.removeItem("activePlan")
}
const setSelectedPlan = (plan) => {
    window.localStorage.setItem("selectedPlan", JSON.stringify(plan));
}
const getSelectedPlan = () => {
    return JSON.parse(window.localStorage.getItem("selectedPlan") || "false");
}

export default {
    setFastingPlan,
    getFastingPlan,
    deletePlan,
    setSelectedPlan,
    getSelectedPlan
};