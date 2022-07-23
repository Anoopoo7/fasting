const setFastingPlan = (plan) => {
    window.localStorage.setItem("activePlan", JSON.stringify(plan));
}

const getFastingPlan = () => {
    return JSON.parse(window.localStorage.getItem("activePlan") || "false")
}
const deletePlan = () => {
    window.localStorage.removeItem("activePlan")
}

export default {
    setFastingPlan,
    getFastingPlan,
    deletePlan
};