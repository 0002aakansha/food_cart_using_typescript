import { createSlice } from "@reduxjs/toolkit";

const initialState: {
    name: string,
    isLoggedIn: boolean
} = {
    name: '',
    isLoggedIn: false
}

const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.name = action.payload
            state.isLoggedIn = true
            localStorage.setItem('user', action.payload)
        },
        removeUser: state => {
            state.name = ''
            state.isLoggedIn = false
            localStorage.removeItem('user')
        },
        checkUser: state => {
            const loggedIn = localStorage.getItem('user')
            loggedIn ? state.isLoggedIn = true : state.isLoggedIn = false
        }
    }
})

export const { addUser, removeUser, checkUser } = userReducer.actions
export default userReducer.reducer