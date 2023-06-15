import { configureStore } from "@reduxjs/toolkit";
import UserReducer from '../Reducer/UserReducer'

// configureStore

const UserStore = configureStore({
    reducer: UserReducer,
    devTools: true
})

export default UserStore