import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './PostSlice'
const reactionEmoji = {
    thumsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕"
}
const ReactionButtons = ({post}) => {
  const dispatch = useDispatch()
    const reaction__buttons = Object.entries(reactionEmoji).map(([name, emoji])=> {
        return <button className=' rounded-4 mx-1 btn btn-primary' onClick={()=>dispatch(reactionAdded({userId: post?.id, name: name}))}>{emoji}{post?.reactions[name]}</button>
    })
  return (
    <div>
      {reaction__buttons}
    </div>
  )
}

export default ReactionButtons
