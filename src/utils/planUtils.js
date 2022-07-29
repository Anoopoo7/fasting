
const findDate = (date, duration) => {
    const d = new Date();
    let [startDate_string] = date.split("T");
    let [currentDate_string] = d.toISOString().split("T");
    const startDate = new Date(startDate_string);
    const currentDate = new Date(currentDate_string);
    // const startDate = new Date("2022-06-26");
    // const currentDate = new Date("2022-06-31");
    let day_difference = (currentDate - startDate) / 86400000;
    return day_difference >= 0 && (duration - day_difference) > 0;
}
const findTime = (each) => {
    const [hr, min] = each.time.split(":")
    const d = new Date();
    const c_hr = d.getHours();
    const c_min = d.getMinutes();
    let status = "PENDING";
    if (each.status == "DONE") {
        return "DONE"
    }
    if (c_hr > (hr | 0)) {
        status = "PASSED"
    }
    if (c_hr == (hr | 0)) {
        if (c_min > min) {
            status = "PASSED"
        }
    }

    return status
}

const updateStatus = (plan_items) => {
    const plan_Items = plan_items.map(each => {
        return {
            ...each, status: findTime(each)
        }
    })
    return plan_Items;
}

const verifyPlan = (plan) => {
    let valid_date = findDate(plan.startDate, plan.fastingPlan.duration);
    if (valid_date) {
        let Items = updateStatus(plan.fastingPlan.fasting_items)
        return Items;
    }
    return false;
}

const verifyPlanUpdation = (item) => {
    if (item.status === "DONE") {
        return false;
    }
    const [hr, min] = item.time.split(":");
    const planTime = new Date();
    planTime.setHours(hr);
    planTime.setMinutes(min);
    const currentTime = new Date();

    const diff = (currentTime.getTime() - planTime.getTime()) / 60000;
    if (diff ** 2 <= 100) {
        return true;
    }
    return false;
}

export default {
    verifyPlan,
    verifyPlanUpdation
};