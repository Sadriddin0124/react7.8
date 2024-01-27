import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from './features/Users/Users'
import PostsList from './features/posts/PostsList'
import Menu from './components/Menu'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Menu/>}></Route>
        <Route path='posts' element={<PostsList/>}></Route>
        <Route path='users' element={<Users/>}></Route>
      </Routes>
    </div>
  )
}

export default App
