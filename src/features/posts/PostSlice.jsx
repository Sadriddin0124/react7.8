import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import sub from "date-fns/sub";
let date = sub(new Date(), { minutes: 1 }).toISOString();
const initialState = [
  {
    id: 1,
    title: "Learn Modern Redux Toolkit",
    author: "Sadriddin Ravshanov",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, vel?",
    date: date,
    reactions: {
      thumsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const PostSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ title, author, content }) {
        return {
          payload: {
            id: nanoid(),
            title: title,
            author: author,
            content: content,
            date: new Date().toISOString(),
            reactions: {
              thumsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded: {
      reducer (state, action) {
        const {id, name} = action.payload
        const single_reaction = state.find((item)=> item.id === id)
        single_reaction.reactions[name] += 1;
      },
      prepare({userId, name}){
        return {
          payload: {
            id: userId,
            name: name
          }
        }
      }
    }
  },
});
export const getAllPosts = (state) => state.posts;
export const { postAdded, reactionAdded } = PostSlice.actions;
export default PostSlice.reducer;
