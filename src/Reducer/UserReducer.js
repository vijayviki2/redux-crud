import { createSlice, combineReducers } from "@reduxjs/toolkit"
import { createUser, deleteUser, readUser, updateUser } from "../Action/UserAction"

// intialState
const initialState = {
    users: [],
    products:[],
    reviews:[],
}

// createSlice({name, intialState,reducer})
const  userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers:(builder) =>{
        builder.addCase(createUser.fulfilled,(state,action) =>{})
        .addCase(readUser.fulfilled,(state,action) =>{
            console.log('reducer data =',action.payload)
            state.users = action.payload

        })
        .addCase(updateUser.fulfilled,(state,action) =>{})
        .addCase(deleteUser.fulfilled,(state,action) =>{})
    }
})

//combine reducer
const reducer = combineReducers({
   myData: userSlice.reducer
})

export default reducer
