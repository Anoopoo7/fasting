import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        active: false,
    },

    reducers: {
        login: (state) => {
            state.active = true
        },
        logout: (state) => {
            state.active = false
        }
        // incrementByAmount: (state, action) => {
        //   state.active += action.payload
        // },
    },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer