import React from 'react'
import { useDispatch } from 'react-redux'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { postAdded } from '../features/posts/PostSlice'

const PostsModal = ({open, toggle}) => {
    const dispatch = useDispatch()
    const addPost = (e) => {
        e.preventDefault()
        let title = e.target[0].value
        let author = e.target[1].value
        let content = e.target[2].value
        dispatch(postAdded({title: title, author: author, content: content}))
        toggle()
    }
  return (
    <div>
      <Modal isOpen={open} toggle={toggle}>
        <ModalHeader>
            <h1 className='text-center'>Add Post</h1>
        </ModalHeader>
        <ModalBody>
            <form onSubmit={addPost} id='posts'>
                <input type="text" className='form-control my-2' placeholder="Title..."/>
                <select className='form-control my-2'>
                    <option value="Unknown Author" hidden>Select Author</option>
                    <option value="Robert Downey">Robert Downey</option>
                    <option value="Chris Hemsworth">Chris Hemsworth</option>
                    <option value="Tom Hiddleston">Tom Hiddleston</option>
                </select>
                <textarea rows="5" className='form-control resize-none' placeholder="Content..."></textarea>
            </form>
        </ModalBody>
        <ModalFooter>
            <button className="btn btn-outline-success" type="submit" form="posts">Save</button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default PostsModal
