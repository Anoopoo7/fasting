import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../app/user/userSlice"

export default configureStore({
    reducer: {
        user: userReducer
    },
})