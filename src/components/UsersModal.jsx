import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { addUsers, fetchUsers, updateUsers } from '../features/Users/UsersSlice'

const UsersModal = ({open, toggle, edit}) => {
    const dispatch = useDispatch()
    const addUser = (e)=> {
        e.preventDefault()
        let payload = {
            id: nanoid(),
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            age: e.target[2].value,
            address: e.target[3].value,
        }
        if(edit) {
            dispatch(updateUsers({id: edit.id, payload: payload}))
        }
        else {
            
            dispatch(addUsers({...payload}))
        }
        dispatch(fetchUsers())
        toggle()
        console.log(payload);
    }
  return (
      <Modal isOpen={open} toggle={toggle}>
        <ModalHeader>
            <h1>Add Users</h1>
        </ModalHeader>
        <ModalBody>
            <form id="users" onSubmit={addUser}>
                <input type="text" className="form-control my-2" placeholder='Firstname' defaultValue={edit.firstName}/>
                <input type="text" className="form-control my-2" placeholder='Lastname' defaultValue={edit.lastName}/>
                <input type="number" className="form-control my-2" placeholder='Age' defaultValue={edit.age}/>
                <input type="text" className="form-control my-2" placeholder='Address' defaultValue={edit.address}/>
            </form>
        </ModalBody>
        <ModalFooter>
            <button className="btn btn-primary" type='submit' form='users'>Save</button>
        </ModalFooter>
      </Modal>
  )
}

export default UsersModal
