import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const URL = "http://localhost:8000/users"
export const fetchUsers = createAsyncThunk("users/fetchUsers", async()=> {
    const response = await axios.get(URL)
    return response
})
export const addUsers = createAsyncThunk("users/addUsers", async(payload)=> {
    const response = await axios.post(`${URL}`, {...payload})
    return response
})
export const updateUsers = createAsyncThunk("users/updateUsers", async({id, payload})=> {
    const response = await axios.put(`${URL}/${id}`, payload)
    return response.data
})
export const deleteUsers = createAsyncThunk("users/deleteUsers", async(id)=> {
    const response = await axios.delete(`${URL}/${id}`)
    return response.data
})

const UsersSlice = createSlice({
    name: "users", 
    initialState: {data: []},
    reducers: {},
    extraReducers: (builder)=> {
        builder
        .addCase(fetchUsers.fulfilled, (state, action)=> {
            state.data = action.payload
        })
        .addCase(addUsers.fulfilled, (state, action)=> {
            state.data.data.push(action.payload)
        })
        .addCase(updateUsers.fulfilled, (state, action)=> {
            let updated_user = action.payload
            let index = state.data.findIndex((item)=> item.id === paylaod.id)
            if(index) {
                state.data[index] = updated_user
            }
        })
        .addCase(deleteUsers.fulfilled, (state, action)=> {
            const id = action.payload
            let delete_user = state.data.find((item)=> item.id !== id)
            state.data = delete_user
        })
    }
})

export default UsersSlice.reducer