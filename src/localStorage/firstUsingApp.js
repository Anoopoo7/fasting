const isFirstOpeningApp = () => {
    const bool = window.localStorage.getItem("isRegularOpening") || "false";
    return JSON.parse(bool)
}
const setFirstOpeingApp = () => {
    window.localStorage.setItem('isRegularOpening', true);
}

export default {
    isFirstOpeningApp,
    setFirstOpeingApp
};