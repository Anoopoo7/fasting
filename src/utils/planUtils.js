
const findDate = (date, duration) => {
    let [currentDate] = date.split("T");
    let [year, month, day] = currentDate.split("-");
    const d = new Date();
    let c_day = d.getDate();
    if (c_day <= (day | 0) + duration) {
        return true;
    }
    else {
        return false;
    }

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

export default {
    verifyPlan
};