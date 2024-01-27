import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllPosts } from './PostSlice';
import PostsModal from '../../components/PostsModal';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostsList = () => {
    const posts = useSelector(getAllPosts)
    const [postsModal, setPostsModal] = useState(false)
  return (
    <div className='container'>
        <PostsModal open={postsModal} toggle={()=>setPostsModal(false)}/>
        <div className="row mt-5">
            <h1 className='text-center'>Posts</h1>
            <div className="col-4 offset-3">
                <button className="btn btn-success" onClick={()=>setPostsModal(true)}>Add +</button>
            </div>
        </div>
      {
        posts.map((item, index)=> {
            return <div className="row mt-2" key={index}>
                <div className="col-6 offset-3">
                    <div className="card">
                        <div className="card-body">
                            <h1>{item.title}</h1>
                            <p>{item.content}</p>
                            <h5 className='text-end'>{item.author}</h5>
                            <TimeAgo time={item.date} />
                            <ReactionButtons post={item}/>
                        </div>
                    </div>
                </div>
            </div>
        })
      }
    </div>
  )
}

export default PostsList
