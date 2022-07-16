const setUser = (user) => {
    window.localStorage.setItem("activeUser", JSON.stringify(user))
}
const getUser = () => {
    return JSON.parse(window.localStorage.getItem("activeUser") || "null");
}
const deleteUser = () => {
    window.localStorage.removeItem("activeUser")
}

export default {
    setUser,
    getUser,
    deleteUser
};