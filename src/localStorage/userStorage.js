const setUser = (user) => {
    window.localStorage.setItem("activeUser", JSON.stringify(user))
}
const getUser = () => {
    return JSON.parse(window.localStorage.getItem("activeUser") || "null");
}

export default {
    setUser,
    getUser
};