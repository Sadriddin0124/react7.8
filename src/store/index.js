import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../features/posts/PostSlice";
import UsersReducer from "../features/Users/UsersSlice";
const store = configureStore({
    reducer: {
        posts: PostReducer,
        users: UsersReducer
    }
})

export default store